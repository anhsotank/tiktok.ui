import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useStore } from '~/store/Provider';
import { actions } from '~/store';

const cx = classNames.bind(styles);
function Accountiem({ data }) {
    const [state, dispatch] = useStore();

    return (
        <Link to={'/artist'} className={cx('wrapper')} onClick={() => dispatch(actions.setartistID(data.id))}>
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
