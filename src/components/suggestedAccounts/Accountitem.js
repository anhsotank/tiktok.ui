import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);
function Accountitem() {
    return (
        <div>
            <Tippy
                interactive
                delay={[1000, 0]}
                placement="bottom"
                render={(props) => (
                    <div tabIndex="-1" {...props}>
                        <AccountPreview />
                    </div>
                )}
            >
                <Link to="./account" className={cx('account-item')}>
                    <img
                        className={cx('avata')}
                        src="https://i.scdn.co/image/ab67706f000000039e541f2dfcd1e74d680f5015"
                        alt=""
                    />

                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <strong>anh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('usename')}>anhanh</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

Accountitem.propTypes = {};
export default Accountitem;
