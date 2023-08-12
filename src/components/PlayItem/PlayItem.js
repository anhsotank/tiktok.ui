import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import styles from './PlayItem.module.scss';
import { useStore } from '~/store/Provider';
import { actions } from '~/store';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PlayItem({ data }) {
    const [state, dispatch] = useStore();

    return (
        <Link
            to={`/playlist/${data.id}`}
            className={cx('wrapper')}
            onClick={() => dispatch(actions.setplaylistID(data.id))}
        >
            <div className={cx('cover-image')}>
                <img className={cx('image')} src={data.images[0].url} alt="" />
            </div>
            <FontAwesomeIcon className={cx('play-icon')} icon={faCirclePlay} />
            <div className={cx('title')}>{data.name}</div>
        </Link>
    );
}

export default PlayItem;
