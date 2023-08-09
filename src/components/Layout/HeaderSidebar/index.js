import classNames from 'classnames/bind';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

import styles from './HeaderSidebar.module.scss';
import Header from '~/components/Layout/components/Header';
import { useStore } from '~/store/Provider';
import SpotifyPlayer from 'react-spotify-web-playback';

const cx = classNames.bind(styles);

function HeaderSidebar({ children }) {
    const [state, dispatch] = useStore();
    const trackUri = state.PlayTrack;
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {/* <SpotifyPlayer
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
                token={ state.token}
                //   callback={(state) => {
                //     setPlay(state.isPlaying);
                //   }}
                play={true}
                uris={trackUri ? [trackUri] : []}
            /> */}
        </div>
    );
}

export default HeaderSidebar;
