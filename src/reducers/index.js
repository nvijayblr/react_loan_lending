import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ClientApplicationReducer from './client-application-reducers';

const rootReducer = combineReducers({
  form: formReducer,
  application: ClientApplicationReducer
});

export default rootReducer;