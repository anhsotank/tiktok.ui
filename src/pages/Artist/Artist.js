import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import styles from './Artist.module.scss';
import Button from '~/components/Button';
import { useStore } from '~/store/Provider';
import SongItem from './SongItem';
import { actions } from '~/store';
import HeaderArtist from './HeaderArtist';
import { useColor } from '~/hooks';
import Albums from './Album/Album';

const cx = classNames.bind(styles);

function Artist() {
    const { id } = useParams();
    const [TrackTop, setTopTrack] = useState([]);
    const [artist, setArtist] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [load, setload] = useState(false);
    const [state, dispatch] = useStore();
    const color = useColor(id);

    // const artisID = state.artistID;
    useEffect(() => {
        async function getTop_TrackData() {
            const artisParameter = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${state.token}`,
                },
            };
            const artist = await fetch(`https://api.spotify.com/v1/artists/${id}`, artisParameter)
                .then((reponse) => reponse.json())
                .then((data) => {
                    setArtist(data);
                })
                .catch((err) => console.log('err'));
            const albums = await fetch(
                `https://api.spotify.com/v1/artists/${id}/albums?include_group=album&market=US&limit=15`,
                artisParameter,
            )
                .then((reponse) => reponse.json())
                .then((data) => {
                    setAlbums(data);
                })
                .catch((err) => console.log('err'));
            const artistTop_tracks = await fetch(
                `https://api.spotify.com/v1/artists/${id}/top-tracks?include_group=top-tracks&market=US&limit=15`,
                artisParameter,
            )
                .then((reponse) => reponse.json())
                .then((data) => {
                    setTopTrack(data);
                    setload(true);
                    dispatch(actions.setTracktop(data));
                })
                .catch((err) => console.log('err'));
        }

        getTop_TrackData();
    }, [id]);

    // useEffect(() => {
    //     async function getplay() {
    //         const artisParameter = {
    //             method: 'PUT',
    //             headers: {
    //                 Authorization: `Bearer ${state.token}`,
    //             },
    //             body: JSON.stringify({
    //                 uris: [state.PlayTrack],
    //             }),
    //         };
    //         const artist = await fetch(`https://api.spotify.com/v1/me/player/play`, artisParameter)
    //             .then((reponse) => reponse.json())
    //             .then((data) => {
    //                 console.log(data);
    //             })
    //             .catch((err) => console.log('err'));
    //     }

    //     getplay();
    // }, [artisID]);

    console.log(albums);
    return (
        <div className={cx('wrapper')}>
            {load && (
                <div
                    className={cx('background-header')}
                    style={{ backgroundImage: `linear-gradient(to top, transparent, ${color} 650px)` }}
                >
                    <HeaderArtist data={artist}></HeaderArtist>
                </div>
            )}
            <article className={cx('wrapper-playlist')}>
                <div className={cx('header-playlist')}>
                    <FontAwesomeIcon className={cx('header-playlist-icon')} icon={faCirclePlay} />
                    <Button blue>follow</Button>
                </div>
                <ul className={cx('list-song')}>
                    {TrackTop?.tracks?.map((result) => (
                        <SongItem key={result.id} data={result} />
                    ))}
                </ul>
            </article>
            <Albums data={albums} />
        </div>
    );
}

export default Artist;
