import classNames from 'classnames/bind';

import styles from './Artist.module.scss';

const cx = classNames.bind(styles);

function HeaderArtist({ data }) {
    return (
        <>
            <img src={data?.images[0]?.url} className={cx('background-header_image')} alt="" />
            <div className={cx('title-header')}>
                <span>verified</span>
                <h1 className={cx('name-artist')}>{data?.name}</h1>
                <span>{data?.followers?.total} follower</span>
            </div>
        </>
    );
}

export default HeaderArtist;
