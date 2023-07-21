import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import styles from './Playlist.module.scss';

const cx = classNames.bind(styles);

function SongPlaylist({ data }) {
    return (
        <li className={cx('song')}>
            <div className={cx('song-title')}>
                <FontAwesomeIcon className={cx('icon-play')} icon={faCirclePlay} />
                <img className={cx('song-img')} src={data?.track?.album?.images[2]?.url} alt="" />
                <span>{data?.track?.name}</span>
            </div>
            <span className={cx('song-album')}>333,546</span>
            <span className={cx('song-date')}>ddd</span>
            <div className={cx('song-action')}>
                <FontAwesomeIcon className={cx('icon-hearth')} icon={faHeart} />
                <span className={cx('duration')}>ffjjf</span>
            </div>
        </li>
    );
}

export default SongPlaylist;
