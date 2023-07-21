import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import styles from './Artist.module.scss';

const cx = classNames.bind(styles);
function SongItem({ data }) {
    return (
        <li className={cx('song')}>
            <div className={cx('song-title')}>
                <FontAwesomeIcon className={cx('icon-play')} icon={faCirclePlay} />
                <img className={cx('song-img')} src={data.album.images[0].url} alt="" />
                <span>{data.name}</span>
            </div>
            <span className={cx('song-view')}>333,546</span>
            <div className="song-action">
                <FontAwesomeIcon className={cx('icon-hearth')} icon={faHeart} />
                <span className={cx('duration')}>{Math.round(data.duration_ms / 60000)} m</span>
            </div>
        </li>
    );
}

export default SongItem;
