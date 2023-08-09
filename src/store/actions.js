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

export const setartistID = (payload) => ({
    type: SET_ARTIST_ID,
    payload,
});
export const setToken = (payload) => ({
    type: SET_TOKEN,
    payload,
});
export const setTracktop = (payload) => ({
    type: SET_TRACKTOP,
    payload,
});
export const setPlaylistfeatured = (payload) => ({
    type: SET_PLAYLIST_FEATURED,
    payload,
});
export const setplaylistID = (payload) => ({
    type: SET_PLAYLIST_ID,
    payload,
});
export const settrack = (payload) => ({
    type: SET_TRACK,
    payload,
});
export const setplaytrack = (payload) => ({
    type: SET_PLAY_TRACK,
    payload,
});
export const setsong = (payload) => ({
    type: SET_SONG,
    payload,
});
