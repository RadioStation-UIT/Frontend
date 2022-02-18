import { combineReducers } from 'redux';
import musicRedux from './musicRedux';
import albumRedux from './albumRedux';

const rootReducer = combineReducers({
    album: albumRedux,
    music: musicRedux,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;