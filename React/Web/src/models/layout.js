export default {
  namespace: 'layout',
  state: {
    
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {},
};
