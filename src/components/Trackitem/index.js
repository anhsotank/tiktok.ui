import classNames from 'classnames/bind';
import styles from './Track.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useStore } from '~/store/Provider';
import { actions } from '~/store';

const cx = classNames.bind(styles);
function Trackitem({ data }) {
    const [state, dispatch] = useStore();

    return (
        <Link to={`/song/${data.id}`} className={cx('wrapper')} onClick={() => dispatch(actions.setsong(data))}>
            <img className={cx('avata')} src={data?.album?.images[0]?.url} alt={data?.album?.images[0]?.url} />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
            </div>
        </Link>
    );
}

export default Trackitem;
