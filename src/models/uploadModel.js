import * as uploadService from '../services/uploadService'
import notification from 'antd'

export default {

  namespace: 'upload',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *uploadEntry({ payload : values,value }, { call, put }){
      const { data } = yield call(uploadService.uploadEntry, values);
      if(data.type === "ok"){
        notification.open({
          message:"上传成功",
          description:data.message
        })
      yield put({ type: 'saveRecord', payload: { value } });
      }else{
        notification.open({
          message:"上传失败",
          description:data.message
        })
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
