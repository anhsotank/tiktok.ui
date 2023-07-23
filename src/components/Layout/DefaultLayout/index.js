import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import Slide from './Slide';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Slide />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
