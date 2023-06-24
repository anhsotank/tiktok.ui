import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Slide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { onClick } = props;
    return <FontAwesomeIcon icon={faChevronCircleRight} className={cx('next-arr')} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <FontAwesomeIcon
            className={cx('pre-arr')}
            style={{ ...style, display: 'block', background: '#f0f8ff', color: ' #e3e6eb' }}
            onClick={onClick}
            icon={faChevronCircleLeft}
        />
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
function Slide() {
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings} className={cx('slick-slider')}>
                <div className={cx('slick-slider_item')}>
                    <img
                        src="https://avatar-ex-swe.nixcdn.com/slideshow/2023/06/08/1/4/4/3/1686204768880_org.jpg"
                        alt="aa"
                    />
                </div>
                <div className={cx('slick-slider_item')}>
                    <img
                        src="https://avatar-ex-swe.nixcdn.com/slideshow/2023/06/08/1/4/4/3/1686204768880_org.jpg"
                        alt="aa"
                    />
                </div>
                <div className={cx('slick-slider_item')}>
                    <img
                        src="https://avatar-ex-swe.nixcdn.com/slideshow/2023/06/08/1/4/4/3/1686204768880_org.jpg"
                        alt="aa"
                    />
                </div>
                <div className={cx('slick-slider_item')}>
                    <img
                        src="https://avatar-ex-swe.nixcdn.com/slideshow/2023/06/08/1/4/4/3/1686204768880_org.jpg"
                        alt="aa"
                    />
                </div>
                <div className={cx('slick-slider_item')}>
                    <img
                        src="https://avatar-ex-swe.nixcdn.com/slideshow/2023/06/08/1/4/4/3/1686204768880_org.jpg"
                        alt="aa"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Slide;
