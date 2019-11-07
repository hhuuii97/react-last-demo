import React, { Component } from "react";
import course from "../../Common/images/course.jpg";
import { connect } from "react-redux";
import { getSowingDataAction } from "../../Store/actionCreators";
class Rotation extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="body advert">
          <ol className="breadcrumb">
            <li>
              <a href="javascript:;">轮播管理</a>
            </li>
            <li className="active">轮播列表</li>
          </ol>
          <div className="page-title">
            <a
              href="sowing_add.html"
              className="btn btn-danger btn-sm pull-right"
            >
              添加轮播图
            </a>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <form action="" className="form-inline">
                <select name="" className="form-control input-sm">
                  <option value="">按课程</option>
                </select>
                <select name="" className="form-control input-sm">
                  <option value="">按学科</option>
                </select>
                <select name="" className="form-control input-sm">
                  <option value="">按热度</option>
                </select>
                <select name="" className="form-control input-sm">
                  <option value="">按日期</option>
                </select>
                <button className="btn btn-primary btn-sm">排序</button>
              </form>
            </div>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>LK001</td>
                  <td>课程图片</td>
                  <td>
                    <img src={course} alt="" />
                  </td>
                  <td>
                    <img src={course} alt="" />
                  </td>
                  <td>www.baidu.com</td>
                  <td>2020-01-01</td>
                  <td>2020-01-10</td>
                  <td>
                    <a href="javascript:;" className="btn btn-primary btn-xs">
                      编辑
                    </a>
                    <a href="javascript:;" className="btn btn-danger btn-xs">
                      删除
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="pagination pull-right">
            <li>
              <a href="#">上一页</a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">下一页</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.reqSowingData();
  }
}

const mapStateToProps = state => {
  return {
    sowingData: state.sowingData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reqSowingData() {
      const action = getSowingDataAction();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rotation);
