import * as constants from "./actionTypes";
// 默认数据
const defaultState = {
  homeData: {},
  sowingData: []
  // {
  //   login_user: "212",
  //   new_register: "121",
  //   new_stu_course: "232",
  //   new_stu_classes: "323",
  //   new_member: "221",
  //   not_reply: "11",
  //   order_counter: {
  //     web: "122",
  //     java: "32",
  //     python: "89",
  //     bigdata: "60",
  //     ui: "99"
  //   }
  // }
};

export default (state = defaultState, action) => {
  if (action.type === constants.INIT_HOME_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.homeData = action.homeData;
    return newState;
  } else if (action.type === constants.INIT_SOWING_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sowingData = action.sowingData;
    return newState;
  }
  return state;
};
