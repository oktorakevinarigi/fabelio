import React, { Component } from 'react';
import { getdata, handleState } from './redux/ac-app'
import { connect } from 'react-redux'
import { Input, Select, Form } from 'antd';

const { Option } = Select;

// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

class Home extends Component {
  componentWillMount() {
    const { getdata } = this.props
    getdata()
  }

  viewProduk = () => {
    const { appState } = this.props
    return (
      <div style={{margin:'auto', width:'92%'}}>
        {
          appState.viewProduct.map((x, i) => {
            return (
              <div style={{ width: '48%', float: 'left', margin: '1%', height: '280px', borderRadius: '5px', border: 'solid 1px #e3e3e3', boxShadow: '7px 13px 17px -9px rgba(150,150,150,0.57)' }}>
                <div style={{ margin: '30px' }}>
                  <div style={{ fontSize: '25px', fontWeight: '700', display: 'inline-block' }}>{x.name}</div>
                  <div style={{ display: 'inline-block', float: 'right', color: '#ff9902', fontWeight: '500' }}>{x.price}</div>
                  <p>{x.description.substring(0, 140)}</p>
                  <div style={{ color: '#2f7fcf', fontWeight: '500' }}>
                    <ul>
                      {x.furniture_style.map(y => {
                        return (
                          <div>
                            <li>{y}</li>
                          </div>
                        )
                      })}
                    </ul>
                  </div>
                  <p style={{ color: '#2f7fcf', fontWeight: '500', float: 'right', textDecoration: 'underline' }}>Delivery Days {x.delivery_time}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  handleState = (property, value) => {
    const { handleState, appState } = this.props
    if (property == 'deliveryTime') {
      var dataValue = []
      for (var i = 0; appState.deliveryTime.length > i; i++) {
        for (var j = 0; value.length > j; j++) {
          if (appState.deliveryTime[i].value == value[j]) {
            dataValue.push({
              value: appState.deliveryTime[i].value,
              label: appState.deliveryTime[i].label
            })
            break;
          }
        }
      }
      handleState(property, dataValue)
    } else {
      handleState(property, value)
    }
  }
  render() {
    const { appState } = this.props
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <div>
        <div style={{ height: '250px', backgroundColor: '#106cc8' }}>
          <div style={{ width: '90%', margin: 'auto', paddingTop: '50px' }} >
            <Form.Item {...formItemLayout} hasFeedback>
              {getFieldDecorator('furniture', {
                initialValue: appState.search.furniture,
                onChange: ((e) => this.handleState('furniture', e.currentTarget.value)),
                rules: [
                  {
                    required: false,
                    message: '',
                  },
                ],
              })(<Input placeholder="Search Furniture" style={{ width: '40%' }} />)}
            </Form.Item>
            <Form.Item {...formItemLayout} hasFeedback>
              {getFieldDecorator('branch_id', {
                initialValue: appState.search.furnitureStyle,
                onChange: ((e) => this.handleState('furnitureStyle', e)),
                rules: [
                  {
                    required: false,
                    message: '',
                  },
                ],
              })(<Select
                mode="multiple"
                optionFilterProp="children"
                style={{ width: '50%' }}
                placeholder="Please select Furniture Style"
              >
                {appState.furniture_styles.map((x, i) => (
                  <Option key={i} value={x}>
                    {x}
                  </Option>
                ))}
              </Select>)}
            </Form.Item>
            <Form.Item {...formItemLayout} hasFeedback>
              {getFieldDecorator('deliveryTime', {
                initialValue: appState.search.deliveryTime.length != 0 ? [] : appState.search.deliveryTime,
                onChange: ((e) => this.handleState('deliveryTime', e)),
                rules: [
                  {
                    required: false,
                    message: '',
                  },
                ],
              })(<Select
                mode="multiple"
                optionFilterProp="children"
                style={{ width: '50%' }}
                placeholder="Please select Delivery Time"
              >
                {
                  appState.deliveryTime.map((x, i) => (
                    <Option key={i} value={x.value}>
                      {x.label}
                    </Option>
                  ))
                }
              </Select>)}
            </Form.Item>
          </div>
        </div>
        {/* <div style={{margin:'auto'}}> */}
          {this.viewProduk()}
        {/* </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  appState: state.App
})

const mapDispatchToProps = {
  getdata,
  handleState
}

const WrappedFormWIthSubmissionButton = Form.create()(Home);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormWIthSubmissionButton);
