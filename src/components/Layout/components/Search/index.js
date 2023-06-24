import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountiem from '~/components/Accountitem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

const CLIENT_ID = 'ebf6cc2e8a114f6894a08892ff5b1831';
const CLIEN_SECRET = '54c38ed2c8114619b7b68f1fc18db003';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setloading] = useState(false);

    const debounced = useDebounce(searchValue, 700);

    const inputref = useRef();

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
            .then((data) => setAccessToken(data.access_token));
    }, []);

    async function search() {
        var artisParameter = {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                Authorization: 'Bearer ' + accessToken,
            },
        };
        var artist = await fetch('https://api.spotify.com/v1/search?q=' + debounced + '&type=artist', artisParameter)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data.artists.items);
                setSearchResult(data.artists.items);
                setloading(false);
            })
            .catch(() => setloading(false));
    }

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }

        setloading(true);
        search();
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setloading(false);
        //     })
        //     .catch(() => setloading(false));
    }, [debounced]);
    ////////
    const handlehideresult = (e) => {};
    return (
        //using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. S
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(atb) => (
                    <div className={cx('search-result')} tabIndex="-1" {...atb}>
                        <PopperWrapper>
                            <h3 className={cx('title-account')}></h3>
                            {searchResult.map((result) => (
                                <Accountiem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowResult(false);
                }}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputref}
                        value={searchValue}
                        type="text"
                        placeholder="Search"
                        spellCheck="false"
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue(' ');
                                inputref.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
