export const handleUserFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};
export const handleLogoutFulfilled = state => {
  state.profile = { name: null, email: null };
  state.token = '';
  state.isLoggedIn = false;
};

export const handleRefreshFulfilled = (state, { payload }) => {
  state.profile = payload;
  state.isLoggedIn = true;
  state.isRefresh = false;
};
export const handleRefreshPending = state => {
  state.isRefresh = true;
};
export const handleRefreshRejected = state => {
  state.isRefresh = false;
};
