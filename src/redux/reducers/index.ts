import { combineReducers } from 'redux';
import musicRedux from './musicRedux';

const rootReducer = combineReducers({
    music: musicRedux
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;