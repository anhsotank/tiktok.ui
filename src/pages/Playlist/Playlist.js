import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

import styles from './Playlist.module.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import SongPlaylist from './SongPlaylist';
import { useStore } from '~/store/Provider';

import { actions } from '~/store';
import HeaderPlaylist from './HeaderPlaylist';
import { useColor } from '~/hooks';

const cx = classNames.bind(styles);

function Playlist() {
    const { id } = useParams();

    const [load, setload] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [state, dispatch] = useStore();
    const color = useColor(id);
    // const playlistID = state.playlistfeatured.id;

    useEffect(() => {
        async function getTrackData() {
            const artisParameter = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${state.token}`,
                },
            };
            // const artist = await fetch(
            //     `https://api.spotify.com/v1/playlists/${id}/tracks?include_group=tracks&market=US&limit=30`,
            //     artisParameter,
            // )
            //     .then((reponse) => reponse.json())
            //     .then((data) => {
            //         setTrack(data);
            //         dispatch(actions.settrack(data));
            //         setload(true);
            //     })
            //     .catch((err) => console.log('err'));
            const getplaylist = await fetch(`https://api.spotify.com/v1/playlists/${id}`, artisParameter)
                .then((reponse) => reponse.json())
                .then((data) => {
                    console.log(data);
                    setPlaylist(data);
                    setload(true);
                })
                .catch((err) => console.log('err'));
        }

        getTrackData();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            {/* {load && (
                <header
                    className={cx('background-header')}
                    style={{ backgroundImage: `linear-gradient(to top, transparent,${color} 50px)` }}
                >
                    <img className={cx('background-header_image')} src={playlist?.images[0]?.url} alt="" />
                    <div className={cx('title-header')}>
                        <span>Playlist</span>
                        <h1 className={cx('name-playlist')}>{playlist.name}</h1>
                        <p>{playlist?.description}</p>
                        <span>{playlist?.followers?.total} follower</span>
                    </div>
                </header>
            )} */}
            {load && (
                <header
                    className={cx('background-header')}
                    style={{ backgroundImage: `linear-gradient(to top, transparent,${color} 50px)` }}
                >
                    <HeaderPlaylist data={playlist}></HeaderPlaylist>
                </header>
            )}
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
                {console.log()}
                <ul className={cx('list-song')}>
                    {load && playlist?.tracks?.items?.map((data) => <SongPlaylist key={data?.track?.id} data={data} />)}
                </ul>
            </article>
        </div>
    );
}

export default Playlist;
