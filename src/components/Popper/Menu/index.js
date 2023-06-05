import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import Menuitem from './Menuitem';

const cx = classNames.bind(styles);

function Menu({ children, item = [] }) {
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(atb) => (
                <div className={cx('menu-list')}>
                    <PopperWrapper>
                        {item.map((e, index) => (
                            <Menuitem key={index} data={e} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
