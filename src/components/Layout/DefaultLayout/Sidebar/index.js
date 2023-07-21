import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu, { Menuitem } from './Menu';
import config from '~/config';
import { faHome, faUser, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/components/suggestedAccounts/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    const menu_item = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            title: 'For Your',
            to: config.routes.home,
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Follwing',
            to: config.routes.following,
        },
        {
            icon: <FontAwesomeIcon icon={faVideoCamera} />,
            title: 'Live',
            to: config.routes.live,
        },
    ];
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {menu_item.map((e, index) => (
                    <Menuitem key={index} title={e.title} to={e.to} icon={e.icon} />
                ))}
            </Menu>
            <SuggestedAccounts label="Suggested Accounts" />
        </aside>
    );
}

export default Sidebar;
