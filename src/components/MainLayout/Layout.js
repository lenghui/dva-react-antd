import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'dva/router'
// import {DownLoak} from '../download/download'
import Users from '../users/users';
// import { Router, Route, Switch } from 'dva/router';
import { Route } from 'dva/router';
import Calculate from '../calcu/calcu'
import UploadFile from '../upload/upload'
import Download from '../download/download'
import LineChart from '../echarts/lineChart'
import EchartsTest from '../echarts/barChar'
// import $ from 'jquery'
import TextyAnim from '../animotion/textyanim'
import SubMenu from 'antd/lib/menu/SubMenu';

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
            <Link to="/users">
            <Icon type="user" />
            <span className="nav-text">用户列表</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/calcu">
            <Icon type="video-camera" />
            <span className="nav-text">计算器</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/upload">
            <Icon type="upload" />
            <span className="nav-text">上传</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/down">
            <Icon type="bar-chart" />
            <span className="nav-text">下载</span>
            </Link>
            </Menu.Item>
            
            <SubMenu key="sub1"
                title={<span><Icon type="area-chart" theme="outlined" />图表</span>}>
                <Menu.Item key="5">
                <Link to="/lineChart">
                <Icon type="cloud-o" />
                <span className="nav-text">图表</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="6">
                <Link to="/barChart">
                <Icon type="appstore-o" />
                <span className="nav-text">柱状图</span>
                </Link>
                </Menu.Item>
            </SubMenu>
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
        <Header style={{ background: '#fafafa', padding: 0, textAlign: "center", minHeight: "100px" }} >
            <TextyAnim></TextyAnim>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: "500px" }}>
            <Route path="/users" component={Users} replace/>
            <Route path="/calcu" component={Calculate} replace/>
            <Route path="/upload" component={UploadFile} replace/>
            <Route path="/down" component={Download} replace/>
            <Route path="/lineChart" component={LineChart} />
            <Route path="/barChart" component={EchartsTest}  />
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