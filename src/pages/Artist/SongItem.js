import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faPause } from '@fortawesome/free-solid-svg-icons';

import styles from './Artist.module.scss';
import { useState } from 'react';
import Heart from '~/components/Heart/Heart';

const cx = classNames.bind(styles);
function SongItem({ data }) {
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

                <img className={cx('song-img')} src={data.album.images[0].url} alt="" />
                <span>{data.name}</span>
            </div>
            <span className={cx('song-duration')}>{duration(data.duration_ms)}</span>
            <div className="song-action">
                <Heart className={cx('icon-heart')} popularity={data?.popularity} />
            </div>
        </li>
    );
}

export default SongItem;
