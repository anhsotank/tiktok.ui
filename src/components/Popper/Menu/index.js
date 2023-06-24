import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import Menuitem from './Menuitem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFc = () => {};
function Menu({ children, item = [], onChange = defaultFc }) {
    const [history, sethistory] = useState([{ data: item }]);
    const curent = history[history.length - 1];

    return (
        <Tippy
            interactive
            offset={[12, 8]}
            hideOnClick={false}
            placement="bottom-end"
            delay={[0, 500]}
            render={(atb) => (
                <div className={cx('menu-list')}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="language"
                                onBack={() => {
                                    sethistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        <div className={cx('menu-body')}>
                            {curent.data.map((e, index) => {
                                const isParent = !!e.children;
                                return (
                                    <Menuitem
                                        key={index}
                                        data={e}
                                        onClick={() => {
                                            if (isParent) {
                                                sethistory((prev) => [...prev, e.children]);
                                            } else {
                                                onChange(e);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                sethistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
