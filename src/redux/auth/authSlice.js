import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = '';
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import {
//   registerUser,
//   // logOut,
//   logIn,
//   // refreshUser
// } from './authOperations';

// const authInitialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   error: '',
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: authInitialState,

//   extraReducers: builder => {
//     builder
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.error = '';
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.error = '';
//       })
//       .addCase(logIn.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//     // .addCase(logOut.fulfilled, state => {
//     //   state.user = { name: null, email: null };
//     //   state.token = null;
//     //   state.isLoggedIn = false;
//     //   state.error = '';
//     // })
//     // .addCase(logOut.rejected, (state, action) => {
//     //   state.error = action.payload;
//     // })

//     // .addCase(refreshUser.pending, state => {
//     //   state.isRefreshing = true;
//     // })
//     // .addCase(refreshUser.fulfilled, (state, action) => {
//     //   state.user = action.payload;
//     //   state.isLoggedIn = true;
//     //   state.isRefreshing = false;
//     // })
//     // .addCase(refreshUser.rejected, state => {
//     //   state.isRefreshing = false;
//     // });
//   },
// });

// export const authReducer = authSlice.reducer;
