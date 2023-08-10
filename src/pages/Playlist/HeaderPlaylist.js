import classNames from 'classnames/bind';

import styles from './Playlist.module.scss';

const cx = classNames.bind(styles);

function HeaderPlaylist({ data }) {
    return (
        <>
            {data && <img className={cx('background-header_image')} src={data?.images[0]?.url} alt="" />}
            <div className={cx('title-header')}>
                <span>Playlist</span>
                <h1 className={cx('name-playlist')}>{data?.name}</h1>
                <p>{data?.description}</p>
                <span>{data?.followers?.total} Like</span>
            </div>
        </>
    );
}

export default HeaderPlaylist;
