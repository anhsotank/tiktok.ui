import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCirclePlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import styles from './Playlist.module.scss';
import Heart from '~/components/Heart';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SongPlaylist({ data }) {
    const [play, setplay] = useState(false);
    const playload = () => {
        setplay(true);
    };
    const pauseload = () => {
        setplay(false);
    };
    const duration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };
    return (
        <li className={cx('song')}>
            <div className={cx('song-title')}>
                <div className={cx('icon')}>
                    {play ? (
                        <FontAwesomeIcon className={cx('icon-pause')} icon={faPause} onClick={pauseload} />
                    ) : (
                        <FontAwesomeIcon className={cx('icon-play')} icon={faCirclePlay} onClick={playload} />
                    )}
                </div>
                <img className={cx('song-img')} src={data?.track?.album?.images[2]?.url} alt="" />
                <Link to={`/song/${data?.track?.id}`} className={cx('name-song')}>
                    {data?.track?.name}
                </Link>
            </div>
            <span className={cx('song-duration')}>{duration(data?.track?.duration_ms)}</span>
            <span className={cx('song-date')}>{data?.track?.album?.release_date}</span>
            <div className={cx('song-action')}>
                <Heart className={cx('icon-heart')} popularity={data?.track?.popularity} />
            </div>
        </li>
    );
}

export default SongPlaylist;
