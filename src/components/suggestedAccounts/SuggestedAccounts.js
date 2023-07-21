import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import Accountitem from './Accountitem';
const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <Accountitem />
            <Accountitem />
            <Accountitem />
            <p className={cx('more-btn')}>see all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
