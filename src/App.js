import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicroutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { useEffect } from 'react';
import { useStore } from './store/Provider';
import { actions } from './store';

const CLIENT_ID = '8c8051d7126a4ac1b859a0e252593946';
const CLIEN_SECRET = 'ae0b628934ca468f9c503a4373ad11ee';
function App() {
    const [state, dispatch] = useStore();
    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIEN_SECRET,
        };
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then((re) => re.json())
            .then((data) => {
                dispatch(actions.setToken(data.access_token));
                // console.log(data);
            });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicroutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
