import React from 'react';
import {Button} from 'antd';
import $ from 'jquery';

class Download extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    clickHander = (e) =>{

        $.ajax({
            type: 'get',
            url: "service/download/down",
            data: {
                username: "zhangsan"
            },
            async: false, 
            success: function(result){
                console.log(result)
                if(result===null || result===''){
                    alert("下载失败！")
                }else{
                    var a = document.createElement('a');
                    $(a).attr("href","service/download/down");
                    console.log(a)
                    a.click();
                    alert("下载成功！");
                    $(a).remove();
                }
            }
        })
    }
    // downLoad(){
        // $.ajax({
        //     type: 'get',
        //     url: "service/download/down",
        //     success: function(result){
        //         $.download('service/download/down', result, 'post');
        //         console.log(result);
        //     }
    //     })
    // }

    // downLoadByDownLoad(){
    //     // $.download("service/download/down")
    // }

    render(){
        return(

            <div>
                {/* <a href="" onClick={this.clickHander}>下载</a> */}
                <Button onClick={this.clickHander}>下载</Button>
                <hr></hr>
            </div>
        )
    }

}

export default Download;