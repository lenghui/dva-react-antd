import React from 'react'
import {Icon, Input, Button, Modal} from 'antd'

class EditUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
        };
      }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    render(){
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    <Button type="primary" onClick={this.showModal}>
                        Open Modal
                    </Button>
                </span>
                <Modal title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} defaultValue={this.props.record.name} />
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} defaultValue={this.props.record.username}/>
                </Modal>
            </span>
        )
    }

}

export default EditUser;