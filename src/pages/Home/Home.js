import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import PlaylistFeatured from '~/components/Layout/DefaultLayout/PlaylistFeatured/PlaylistFeatured';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <PlaylistFeatured />
        </div>
    );
}

export default Home;
