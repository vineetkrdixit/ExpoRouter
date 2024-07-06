import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
            user: object;
}

const initialState: CounterState = {
            user: {},
};

export const userInfoReducer = createSlice({
            name: 'userInfo',

            initialState,
            reducers: {
                        userInformation: (state) => {
                                    // Redux Toolkit allows us to write "mutating" logic in reducers. It       dfdf                                    dffdfdfdfd
                                    // doesn't actually mutate the state because it uses the Immer library,
                                    // which detects changes to a "draft state" and produces a brand new dfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                                    // immutable state based off those changes are done

                                    state.user;
                        },
            },
});

// Action creators are generated for each case reducer function
export const { userInformation } = userInfoReducer.actions;

export default userInfoReducer.reducer;
