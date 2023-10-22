import persistReducer from 'redux-persist/es/persistReducer';
import { appReducer } from './appState/slice';
import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';
import { userReducer } from './user/userSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};
const userPersistReducer = persistReducer(persistConfig, userReducer);

export const reducer = {
  user: userPersistReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  appState: appReducer,
};
