import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('table')}>
            <form action="">
                <h3 className={cx('login')}>ĐĂNG NHẬP</h3>
                <div className={cx('login-Use')}>
                    <input type="text" className={cx('use')} required />
                    <label htmlFor="">Use</label>
                </div>
                <div className={cx('login-password')}>
                    <input type="password" className={cx('password')} required />
                    <label htmlFor="">Password</label>
                </div>
                <button className={cx('login-btn')}>L O G I N</button>
            </form>
        </div>
    );
}

export default Login;
