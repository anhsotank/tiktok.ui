import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    return (
        <PopperWrapper>
            <div className={cx('preview')}>
                <header className={cx('header')}>
                    <img className={cx('avata')} src={data?.images[0].url} alt="" />
                    <Button blue>Follow</Button>
                </header>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <strong>{data?.name}</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <Link to={`/artist/${data.id}`} className={cx('usename')}>
                        {data?.name}
                    </Link>
                </div>
                <p className="analytics">
                    <span className={cx('value')}>
                        {' '}
                        <strong>{data?.followers.total}</strong> follow
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
