import classNames from 'classnames/bind';

import styles from './Artist.module.scss';

const cx = classNames.bind(styles);

function HeaderArtist({ data }) {
    return (
        <div className={cx('background-header')}>
            <img src={data?.tracks[0]?.album?.images[0]?.url} className={cx('background-header_image')} alt="" />
            <div className={cx('title-header')}>
                <span>verified</span>
                <h1 className={cx('name-artist')}>{data.tracks[0].album.artists[0].name}</h1>
                <span>1,338,332</span>
            </div>
        </div>
    );
}

export default HeaderArtist;
