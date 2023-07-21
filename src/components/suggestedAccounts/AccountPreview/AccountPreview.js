import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <PopperWrapper>
            <div className={cx('preview')}>
                <header className={cx('header')}>
                    <img
                        className={cx('avata')}
                        src="https://i.scdn.co/image/ab67706f000000039e541f2dfcd1e74d680f5015"
                        alt=""
                    />
                    <Button blue>Follow</Button>
                </header>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <strong>anh</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('usename')}>anhanh</span>
                </div>
                <p className="analytics">
                    <span className={cx('value')}>
                        {' '}
                        <strong>4M</strong> follow
                    </span>
                    <span className={cx('value')}>
                        <strong>3M</strong> like
                    </span>
                </p>
            </div>
        </PopperWrapper>
    );
}

export default AccountPreview;
