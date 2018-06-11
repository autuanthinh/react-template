// import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS } from './consts';

const  selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
}

const initialState = fromJS({
    isFetching: false,
    item: [],
    lastUpdated: null
});

const posts = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return state.set('isFetching', true)
        case RECEIVE_POSTS:
            return state
            .set('isFetching', false)
            .set('items', action.posts)
            .set('lastUpdated', action.receivedAt)
        default:
            return state;
    }
}

const postsByReddit = (state = fromJS({}), action) => {
    switch (action.type) {
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            const key = action.reddit;
            return state.set(key, posts(state[key], action));
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit
})

export default rootReducer;