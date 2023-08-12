import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from './Song.module.scss';
import { useStore } from '~/store/Provider';
import { useParams } from 'react-router-dom';
import { actions } from '~/store';
import { useColor } from '~/hooks';

const cx = classNames.bind(styles);

function Song() {
    const [state, dispatch] = useStore();
    const [load, setload] = useState(false);
    const { id } = useParams();
    const [song, setSong] = useState([]);
    const color = useColor(id);

    const duration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };

    useEffect(() => {
        async function getSongData() {
            const artisParameter = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${state.token}`,
                },
            };
            const artist = await fetch(`https://api.spotify.com/v1/tracks/${id}`, artisParameter)
                .then((reponse) => reponse.json())
                .then((data) => {
                    setSong(data);
                    setload(true);
                })
                .catch((err) => console.log('err'));
        }

        getSongData();
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            {load && (
                <header
                    className={cx('background-header')}
                    style={{ backgroundImage: `linear-gradient(to top, transparent, ${color} 650px)` }}
                >
                    <img className={cx('background-header_image')} src={song?.album?.images[0]?.url} alt="" />
                    <div className={cx('title-header')}>
                        <span>Song</span>
                        <h1 className={cx('name-song')}>{song.name}</h1>

                        <span>
                            {song?.artists[0]?.name} | {duration(song?.duration_ms)}
                        </span>
                    </div>
                </header>
            )}
            <article className={cx('song')}>
                <div className={cx('header-song')}>
                    <div className={cx('song-icon')}>
                        <FontAwesomeIcon className={cx('song-icon-play')} icon={faCirclePlay} />
                        <FontAwesomeIcon className={cx('song-icon-heart')} icon={faHeart} />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Song;
