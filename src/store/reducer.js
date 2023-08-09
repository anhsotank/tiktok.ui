import {
    SET_ARTIST_ID,
    SET_PLAYLIST_FEATURED,
    SET_PLAYLIST_ID,
    SET_PLAY_TRACK,
    SET_SONG,
    SET_TOKEN,
    SET_TRACK,
    SET_TRACKTOP,
} from './constants';

const initState = {
    token: '',
    artistID: '5dfZ5uSmzR7VQK0udbAVpf',
    playlistfeatured: [],
    TrackTop: [],
    Track: [],
    Song: [],
    playlistID: '',
    PlayTrack: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }
        case SET_ARTIST_ID: {
            return {
                ...state,
                artistID: action.payload,
            };
        }
        case SET_TRACKTOP: {
            return {
                ...state,
                TrackTop: action.payload,
            };
        }
        case SET_PLAY_TRACK: {
            return {
                ...state,
                PlayTrack: action.payload,
            };
        }
        case SET_PLAYLIST_ID: {
            return {
                ...state,
                playlistID: action.payload,
            };
        }
        case SET_PLAYLIST_FEATURED: {
            return {
                ...state,
                playlistfeatured: action.payload,
            };
        }
        case SET_TRACK: {
            return {
                ...state,
                Track: action.payload,
            };
        }
        case SET_SONG: {
            return {
                ...state,
                Song: action.payload,
            };
        }

        default:
            return state;
    }
};

export default reducer;
export { initState };
