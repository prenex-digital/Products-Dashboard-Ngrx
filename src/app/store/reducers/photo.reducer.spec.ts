import * as fromReducer from './photo.reducer';

describe('PhotosReducer', () => {
    it('Photos Reducer Initial default State', () => {
        const { initialPhotoState } = fromReducer;
        const action = {
            type: 'Unknown',
        };
        const state = fromReducer.reducer(initialPhotoState, action);
        expect(state).toBe(initialPhotoState)
    })
});
