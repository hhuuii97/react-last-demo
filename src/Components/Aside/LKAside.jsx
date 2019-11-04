import React, { Component } from "react";
import avatar from "../../Common/uploads/avatar.jpg";

class LKAside extends Component {
  render() {
    return (
      // <!-- 侧边栏 -->
      <div className="aside">
        {/* <!-- 个人资料 --> */}
        <div className="profile">
          {/* <!-- 头像 --> */}
          <div className="avatar img-circle">
            <img src={avatar} />
          </div>
          <h4>黑大帅</h4>
        </div>
        {/* <!-- 导航菜单 --> */}
        <div className="navs">
          <ul className="list-unstyled">
            <li>
              <a href="/" className="active">
                <i className="fa fa-area-chart"></i>
                数据分析
              </a>
            </li>
            <li>
              <a href="/user">
                <i className="fa fa-users"></i>
                用户中心
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="fa fa-object-group"></i>
                课程管理
                <i className="arrow fa fa-angle-right"></i>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="/courseadd">课程添加</a>
                </li>
                <li>
                  <a href="/courselist">课程列表</a>
                </li>
                <li>
                  <a href="/coursecategory">课程分类</a>
                </li>
                <li>
                  <a href="/coursetopic">课程专题</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="docent_list.html">
                <i className="fa fa-bars"></i>
                运营中心
              </a>
            </li>
            <li>
              <a href="/rotation">
                <i className="fa fa-calculator"></i>
                轮播中心
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="fa fa-cog"></i>
                设置中心
                <i className="arrow fa fa-angle-right"></i>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="javascript:;">站点设置</a>
                </li>
                <li>
                  <a href="javascript:;">用户设置</a>
                </li>
                <li>
                  <a href="javascript:;">角色管理</a>
                </li>
                <li>
                  <a href="javascript:;">课程设置</a>
                </li>
                <li>
                  <a href="javascript:;">运营设置</a>
                </li>
                <li>
                  <a href="javascript:;">财务设置</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LKAside;
