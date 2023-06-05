import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowDown,
    faCloudArrowUp,
    faEarthAsia,
    faEllipsisVertical,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import logo from '~/assets/logo/logo_new.png';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountiem from '~/components/Accountitem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const menu_item = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'keyboar',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(atb) => (
                        <div className={cx('search-result')} tabIndex="-1" {...atb}>
                            <PopperWrapper>
                                <h3 className={cx('title-account')}></h3>
                                <Accountiem />
                                <Accountiem />
                                <Accountiem />
                                <Accountiem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <button className={cx('btn-update')}>
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                    </button>
                    <Button outline>Sign up</Button>
                    <Button blue>Login</Button>

                    <Menu item={menu_item}>
                        <button className={cx('btn-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
