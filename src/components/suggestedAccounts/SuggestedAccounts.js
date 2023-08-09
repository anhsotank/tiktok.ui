import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

import styles from './SuggestedAccounts.module.scss';
import Accountitem from './Accountitem';
import { useStore } from '~/store/Provider';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [Account, setAccount] = useState([]);
    const [load, setload] = useState(false);
    const [state, dispatch] = useStore();
    const [isseeall, setisseeall] = useState(false);
    const onSeeAllClick = () => {
        setisseeall(!isseeall);
    };

    useEffect(() => {
        async function getAccountData() {
            const artisParameter = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${state.token}`,
                },
            };
            const artist = await fetch(
                `https://api.spotify.com/v1/artists/${state.artistID}/related-artists`,
                artisParameter,
            )
                .then((reponse) => reponse.json())
                .then((data) => {
                    setAccount(data);
                    console.log(data);
                    setload(true);
                })
                .catch((err) => console.log('err'));
        }

        getAccountData();
    }, []);
    return (
        <div className={cx('wrapper', isseeall ? 'see_all' : '')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-account')}>
                {Account.artists?.map((data) => (
                    <Accountitem key={data.id} data={data} />
                ))}
            </div>
            <p className={cx('more-btn')} onClick={() => onSeeAllClick()}>
                see all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
