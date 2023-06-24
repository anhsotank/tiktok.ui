import config from '~/config';
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Update from '~/pages/Update';
import Login from '~/pages/Login';
import Live from '~/pages/Live';
const publicroutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.update, component: Update, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.live, component: Live },
];
const privateroutes = [];
export { publicroutes, privateroutes };
