import * as fromReducer from './post.reducer';

describe('PostsReducer', () => {
    it('Posts Reducer Initial default State', () => {
        const { initialState } = fromReducer;
        const action = {
            type: 'Unknown',
        };
        const state = fromReducer.reducer(initialState, action);
        expect(state).toBe(initialState)
    })
});
