import classNames from 'classnames/bind';
import styles from './Heart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Heart({ blue, outline, children, popularity }) {
    const [like, setlike] = useState(popularity),
        [islike, setislike] = useState(false),
        onLikeClick = () => {
            setlike(like + (islike ? -1 : 1));
            setislike(!islike);
        };

    return (
        <button className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon-heart', islike ? 'blue' : '')} icon={faHeart} onClick={onLikeClick} />
            <span>{like}</span>
        </button>
    );
}

export default Heart;
