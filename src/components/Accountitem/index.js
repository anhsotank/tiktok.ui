import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Accountiem({ data }) {
    return (
        <Link to={`/@${data.name}`} className={cx('wrapper')}>
            <img className={cx('avata')} src={data.images[0]?.url} alt={data.images[0]?.url} />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('usename')}>{data.name}</span>
            </div>
        </Link>
    );
}

export default Accountiem;
