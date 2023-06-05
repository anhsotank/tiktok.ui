import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Menuitem({ data }) {
    return (
        <Button className={cx('menu-item')} icon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default Menuitem;
