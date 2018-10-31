
import * as userService from '../services/userService'

export default {

  namespace: 'users',

  state: {
    list: null,
  },
  
  reducers: {
    save(state, {payload: {data:list}}) {
      return { ...state, list};
    },
  },
  
  effects: {
    *fetch({},{ call, put }) {  // eslint-disable-line
      console.log("fetch")
      const {data} = yield call(userService.fetch);

      yield put({ type: 'save', payload: {data} 
      });
    },
  },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
};
