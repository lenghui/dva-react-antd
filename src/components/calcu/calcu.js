import React from 'react'
import PropTypes from 'prop-types';
import { InputNumber, Button, Checkbox, Select } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);


const Option = Select.Option;
class Calculate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value1: 0,
          value2: 0,
          value: 10000,
          ctype: 0,
          result: 0,
          animation: null,
          formatMoney: false,
        };
      }
    
      onChangeMoney = (e) => {
        this.setState({
          formatMoney: e.target.checked
        })
      }
    // 使用this.setState更新状态可能是异步的尽量少用或不用
    //   getResult = () => {
    //     const { value1, value2 } = this.state;
    //     console.log(value1, value2)
    //         this.setState({
    //             result: value1+value2
    //         })
    // }

      onClick = () => {
          const { value, formatMoney, ctype, value1, value2 } = this.state;
          const result = (ctype, value1,value3) =>{
            switch(ctype){
                case "0" : return value1+value2;
                case "1" : return value1-value2;
                case "2" : return value1*value2;
                case "3" : return value1/value2;
                default: return null;
            }
          }
          const val = result(ctype, value1, value2);
        this.setState({
          animation: {
            Children: { 
              value: typeof value === 'number' ? val : 10000 ,floatLength: 2,
              formatMoney, 
            }, 
            duration: 1000,
          }
        })
      }
    
      onChange = (value) => {
        console.log(value)
        this.setState({
          value,
        });
      }
      setValue1 = (value) => {
          this.setState({
              value1: value
          })
      }

      setValue2 = (value) => {
        this.setState({
            value2: value
        })
    }
    handleChange = (value) => {
        this.setState({
            ctype: value
        })
    }

      render() {
        return (
          <div 
            style={{ 
              display: 'flex', 
              height: '100%',
              minHeight: '220px', 
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ width: '100%' }}>
              <TweenOne
                animation={this.state.animation}
                style={{ fontSize: 56, marginBottom: 12 }}
              >
                0
              </TweenOne>
              <InputNumber 
                defaultValue={this.state.value1}
                onChange={this.setValue1}
              />
              <Select defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                <Option  value="0">+</Option>
                <Option value="1">-</Option>
                <Option value="2">*</Option>
                <Option value="3">/</Option>
              </Select>
              <InputNumber 
                defaultValue={0}
                onChange={this.setValue2}
              />
              <Checkbox style={{ margin: '0 16px' }} onChange={this.onChangeMoney}> to money</Checkbox>
              <Button
                type="primary"
                style={{ marginBottom: 32 }}
                onClick={this.onClick}
              >
                开始    
              </Button>
            </div>
          </div>
        );
      }
    }
    Calculate.propTypes = {
      children: PropTypes.any,
      className: PropTypes.string,
      paused: PropTypes.bool,
    };

export default Calculate;