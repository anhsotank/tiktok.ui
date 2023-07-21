import classNames from 'classnames/bind';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

import styles from './HeaderSidebar.module.scss';
import Header from '~/components/Layout/components/Header';

const cx = classNames.bind(styles);

function HeaderSidebar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderSidebar;
