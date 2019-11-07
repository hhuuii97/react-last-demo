import ajax from "./ajax";
// 定义基础路径
const BASE_URL = "";

// 1、请求首页数据列表
export const getHomeData = () => ajax("url:BASE_URL" + "/home/api/list");

// 2、请求轮播数据列表
export const getSowingData = () => ajax("url:BASE_URL" + "/sowing/api/list");
