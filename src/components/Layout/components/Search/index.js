import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountiem from '~/components/Accountitem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { useStore } from '~/store/Provider';
import { actions } from '~/store';
import Trackitem from '~/components/Trackitem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResultTrack, setSearchResultTrack] = useState([]);
    const [searchResultArtist, setSearchResultArtist] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setloading] = useState(false);
    const [state, dispatch] = useStore();

    const debounced = useDebounce(searchValue, 700);

    const inputref = useRef();

    async function search(type) {
        const artisParameter = {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                Authorization: 'Bearer ' + state.token,
            },
        };

        const artist = await fetch(
            'https://api.spotify.com/v1/search?q=' + debounced + '&type=' + type + '&market=US&limit=3',
            artisParameter,
        )
            .then((reponse) => reponse.json())
            .then((data) => {
                type === 'artist' ? setSearchResultArtist(data.artists.items) : setSearchResultTrack(data.tracks.items);
                setloading(false);
            })
            .catch(() => setloading(false));
    }

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }

        setloading(true);
        search('artist');
        search('track');

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
                visible={showResult && (searchResultArtist.length > 0 || searchResultTrack.length > 0)}
                interactive
                render={(atb) => (
                    <div className={cx('search-result')} tabIndex="-1" {...atb}>
                        <PopperWrapper>
                            <h3 className={cx('title-account')}>artist</h3>
                            {searchResultArtist?.map((result) => (
                                <Accountiem key={result.id} data={result} />
                            ))}
                            <h3 className={cx('title-account')}>track</h3>

                            {searchResultTrack?.map((result) => (
                                <Trackitem key={result.id} data={result} />
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
                        placeholder="Artist,Track"
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
