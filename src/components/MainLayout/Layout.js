import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'dva/router'
import {DownLoak} from '../download/download'
import Users from '../users/users';
import { Router, Route, Switch } from 'dva/router';
import Calculate from '../calcu/calcu'
import UploadFile from '../upload/upload'
import Download from '../download/download'
import $ from 'jquery'

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component{

    showItem = ()=>{
       return (
           <div>
           </div>
       )
    }



    render(){
        return(

        <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text"><Link to="/users">用户列表</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text"><Link to="/calcu">计算器</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text"><Link to="/upload">上传</Link></span>
            </Menu.Item>
            <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text"><Link to="/down">下载</Link></span>
            </Menu.Item>
            <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
            </Menu.Item>
            <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
            </Menu.Item>
            <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
            </Menu.Item>
        </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }} >
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Route path="/users" component={Users} replace/>
            <Route path="/calcu" component={Calculate} replace/>
            <Route path="/upload" component={UploadFile} replace/>
            <Route path="/down" component={Download} replace/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
        </Layout> 
    </Layout> 
        )
    }
}

export default MainLayout;