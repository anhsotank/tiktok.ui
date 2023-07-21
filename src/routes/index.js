import config from '~/config';
import { HeaderOnly, HeaderSidebar } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Update from '~/pages/Update';
import Login from '~/pages/Login';
import Live from '~/pages/Live';
import Artist from '~/pages/Artist';
import Playlist from '~/pages/Playlist';

const publicroutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.update, component: Update, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.live, component: Live },
    { path: config.routes.artist, component: Artist, layout: HeaderSidebar },
    { path: config.routes.playlist, component: Playlist, layout: HeaderSidebar },
];
const privateroutes = [];
export { publicroutes, privateroutes };
