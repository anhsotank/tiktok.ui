import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Playlist.module.scss';
import PlayItem from '~/components/PlayItem';
import axios from 'axios';
import { useStore } from '~/store/Provider';

const cx = classNames.bind(styles);
// const CLIENT_ID = 'ebf6cc2e8a114f6894a08892ff5b1831';
// const CLIEN_SECRET = '54c38ed2c8114619b7b68f1fc18db003';
function PlaylistFeatured() {
    const [state, dispatch] = useStore();
    const [playlistResult, setPlaylistResult] = useState([]);
    const [load, setload] = useState(false);

    const token = state.token;
    useEffect(() => {
        const getplaylist = async () => {
            const artisParameter = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${state.token}`,
                    'Content-Type': 'application/json',
                },
            };
            const artist = await fetch('https://api.spotify.com/v1/browse/featured-playlists', artisParameter)
                .then((reponse) => reponse.json())
                .then((data) => {
                    console.log(data);
                    setload(true);
                    setPlaylistResult(data);
                })
                .catch((err) => console.log('err'));
        };
        getplaylist();
    }, [token]);
    // console.log(state.token);
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: `Bearer ${state.token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            console.log(state.token);
        };

        getPlaylistData();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1>Featured playlists</h1>
            <div className={cx('playlist')}>
                {load && playlistResult?.playlists?.items?.map((data) => <PlayItem key={data.id} data={data} />)}
            </div>
        </div>
    );
}

export default PlaylistFeatured;
