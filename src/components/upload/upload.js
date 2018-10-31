import React from 'react';
import { Upload, message, Button, Icon } from 'antd';

class UploadFile extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const props = {
            name: 'file',
            // 请求地址
            action: 'service/upload/up',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              //info.file.response&&info.file.response.message这样写主要是为了判空
              //第一次调用console.log时里面response.message还没有值，因此不判空的话会报错message undefine
              console.log(info.file.response&&info.file.response.message)
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };

        return(
            <Upload {...props}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
        )
    }

}

export default UploadFile;