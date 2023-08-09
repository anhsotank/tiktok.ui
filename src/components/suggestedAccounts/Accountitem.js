import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
import { useStore } from '~/store/Provider';
import { actions } from '~/store';
const cx = classNames.bind(styles);
function Accountitem({ data }) {
    const [state, dispatch] = useStore();

    return (
        <div>
            <Tippy
                interactive
                delay={[1000, 0]}
                placement="bottom"
                render={(props) => (
                    <div tabIndex="-1" {...props}>
                        <AccountPreview data={data} />
                    </div>
                )}
            >
                <Link
                    to={`/artist/${data.id}`}
                    className={cx('account-item')}
                    onClick={() => dispatch(actions.setartistID(data.id))}
                >
                    <img className={cx('avata')} src={data.images[0].url} alt="" />

                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <strong>{data.name}</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('usename')}>{data.name}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

Accountitem.propTypes = {};
export default Accountitem;
