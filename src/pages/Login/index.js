import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useEffect } from 'react';
import { useStore } from '~/store/Provider';
import { actions } from '~/store';

const cx = classNames.bind(styles);
function Login() {
    const [state, dispatch] = useStore();

    // const handleClick = async () => {
    //     const client_id = '8c8051d7126a4ac1b859a0e252593946';
    //     const redirect_uri = 'http://localhost:3000/';
    //     const api_uri = 'https://accounts.spotify.com/authorize';
    //     const scope = [
    //         'user-read-private',
    //         'user-read-email',
    //         'user-modify-playback-state',
    //         'user-read-playback-state',
    //         'user-read-currently-playing',
    //         'user-read-recently-played',
    //         'user-top-read',
    //     ];
    //     window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    //         ' ',
    //     )}&response_type=token&show_dialog=true`;
    // };
    // useEffect(() => {
    //     const hash = window.location.hash;
    //     if (hash) {
    //         const token = hash.substring(1).split('&')[0].split('=')[1];
    //         if (token) {
    //             dispatch(actions.setToken(token));
    //             console.log(token);
    //         }
    //     }
    // }, []);

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
