import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from './Song.module.scss';
import { useStore } from '~/store/Provider';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Song() {
    const [state, dispatch] = useStore();

    const { id } = useParams();
    console.log(state.Song);
    const data = state.Song;
    const duration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };
    return (
        <div className={cx('wrapper')}>
            <header className={cx('background-header')}>
                <img className={cx('background-header_image')} src={data?.album?.images[0]?.url} alt="" />
                <div className={cx('title-header')}>
                    <span>Song</span>
                    <h1 className={cx('name-song')}>{data.name}</h1>

                    <span>
                        {data?.artists[0]?.name} | {duration(data?.duration_ms)}
                    </span>
                </div>
            </header>
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
