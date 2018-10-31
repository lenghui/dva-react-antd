import React,{Component} from 'react';
import { connect } from 'dva';
import {Table} from 'antd';

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
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'username',
            key: 'username',
          }, {
            title: '住址',
            dataIndex: 'email',
            key: 'email',
          }];
          
          return (
              <div>
                  <Table 
                  dataSource={this.props.list} 
                  columns={columns} 
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