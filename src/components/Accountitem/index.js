import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Accountiem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avata')} src="" alt="avata" />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}> truong quoc anh</span>
            </div>
        </div>
    );
}

export default Accountiem;
