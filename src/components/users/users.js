import React,{Component} from 'react';
import { connect } from 'dva';
import {Table, } from 'antd';
import EditUser from './editUser'

class Users extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        this.props.dispatch({
            type:"users/fetch",
            payload:{
                name: 123
            }
        })
    }

    castTable(){
        const columns = [{
            title: '姓氏',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '姓名',
            dataIndex: 'username',
            key: 'username',
          }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
          }, {
            title: '操作',
            dataIndex: 'op',
            key: 'op',
            render: (text, record) => (
                            <span>
                                <EditUser record ={record} />
                            </span>
                    )
          }];
          
          return (
              <div>
                  <Table 
                  dataSource={this.props.list} 
                  columns={columns} 
                  rowKey={record => record.id}
                  bordered />
              </div>
          )
    }

    render(){
        return(
            <div>
                <h4>用户列表</h4>
                <div>
                    {this.castTable()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { list } = state.users;
    console.log(list)
    return {
    //   loading: state.loading.models.ruleGroupManagement,
    list,
    };
  }

export default connect(mapStateToProps)(Users);