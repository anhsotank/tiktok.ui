import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import Slide from './Slide';

import SpotifyPlayer from 'react-spotify-web-playback';
import { useStore } from '~/store/Provider';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [state, dispatch] = useStore();
    const trackUri = state.PlayTrack;

    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Slide />
                    {children}
                </div>
            </div>

            <SpotifyPlayer
                styles={{
                    activeColor: '#fff',
                    bgColor: '#181818',
                    color: '#fff',
                    loaderColor: '#fff',
                    sliderColor: '#1cb954',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                    height: '70px',
                    sliderTrackColor: '#535353',
                    sliderTrackBorderRadius: '4px',
                    sliderHandleColor: '#fff',
                    errorColor: '#fff',
                }}
                token={state.token && state.token}
                //   callback={(state) => {
                //     setPlay(state.isPlaying);
                //   }}
                play={true}
                uris={trackUri ? [trackUri] : []}
            />
        </div>
    );
}

export default DefaultLayout;
