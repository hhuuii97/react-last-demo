import * as constants from "./actionTypes";
// 默认数据
const defaultState = {
  homeData: {}
};

export default (state = defaultState, action) => {
  if (action.type === constants.INIT_HOME_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.homeData = state.homeData;
    return newState;
  }
  return state;
};
