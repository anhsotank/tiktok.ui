import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import styles from './Playlist.module.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import SongPlaylist from './SongPlaylist';
import { useStore } from '~/store/Provider';

import { actions } from '~/store';

const cx = classNames.bind(styles);

function Playlist() {
    const [Track, setTrack] = useState([]);
    const [load, setload] = useState(false);
    const [state, dispatch] = useStore();

    const playlistID = state.playlistfeatured.id;
    useEffect(() => {
        async function getTrackData() {
            const artisParameter = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${state.token}`,
                },
            };
            const artist = await fetch(
                `https://api.spotify.com/v1/playlists/${state.playlistfeatured?.id}/tracks?include_group=tracks&market=US&limit=30`,
                artisParameter,
            )
                .then((reponse) => reponse.json())
                .then((data) => {
                    setTrack(data);
                    dispatch(actions.settrack(data));
                    setload(true);
                })
                .catch((err) => console.log('err'));
        }

        {
            state.playlistID && getTrackData();
        }
    }, [playlistID]);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('background-header')}>
                <img className={cx('background-header_image')} src={state?.playlistfeatured?.images[0]?.url} alt="" />
                <div className={cx('title-header')}>
                    <span>Playlist</span>
                    <h1 className={cx('name-playlist')}>{state.playlistfeatured.name}</h1>
                    <p>{state.playlistfeatured.description}</p>
                    <span>1,338,332</span>
                </div>
            </header>
            <article className={cx('playlist')}>
                <div className={cx('header-playlist')}>
                    <div className={cx('playlist-icon')}>
                        <FontAwesomeIcon className={cx('playlist-icon-play')} icon={faCirclePlay} />
                        <FontAwesomeIcon className={cx('playlist-icon-heart')} icon={faHeart} />
                    </div>
                    <div className={cx('playlist-title')}>
                        <span>Title</span>
                        <span>Duration</span>
                        <span>Date added</span>
                        <span>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                </div>
                {console.log(Track)}
                <ul className={cx('list-song')}>
                    {load && Track.items?.map((data) => <SongPlaylist key={data?.track?.id} data={data} />)}
                </ul>
            </article>
        </div>
    );
}

export default Playlist;
