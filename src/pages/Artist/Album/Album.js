import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import { useStore } from '~/store/Provider';
import { actions } from '~/store';
import { Link } from 'react-router-dom';

import styles from './Album.module.scss';
import Albumitem from './Albumitem';

const cx = classNames.bind(styles);

function Albums({ data }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings} className={cx('slder-album')}>
                {data?.items?.map((data) => (
                    <Albumitem key={data.id} data={data} />
                ))}
            </Slider>
        </div>
    );
}

export default Albums;
