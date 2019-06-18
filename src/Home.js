import React, { Component } from 'react';
import { getdata, handleState } from './redux/ac-app'
import { connect } from 'react-redux'
import { Input, Select, Form, Row, Col } from 'antd';
var numeral = require('numeral');
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
      <div className="content">
        {
          appState.viewProduct.map((x, i) => {
            return (
              <div key={i} className="content-item">
                <div style={{ margin: '30px' }}>
                  <div className="content-item-name">{x.name}</div>
                  <div className="content-item-price">IDR {numeral(x.price).format('0,0')}</div>
                  <p>{x.description.substring(0, 140)}</p>
                  <div className="content-item-furniture">
                    <ul>
                      {x.furniture_style.map((y, j) => {
                        return (
                          <div key={j}>
                            <li>{y}</li>
                          </div>
                        )
                      })}
                    </ul>
                  </div>
                  <p className="content-item-desc">Delivery Days {x.delivery_time}</p>
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
    return (
      <div>
        <div className="header">
          <div className="positionHeader">
            <Row>
              <Col span={24}>
                <Form.Item hasFeedback>
                  {getFieldDecorator('furniture', {
                    initialValue: appState.search.furniture,
                    onChange: ((e) => this.handleState('furniture', e.currentTarget.value)),
                    rules: [
                      {
                        required: false,
                        message: '',
                      },
                    ],
                  })(<Input placeholder="Search Furniture" size="large" style={{ width: '40%' }} disabled={appState.search.furnitureStyle.length != 0 || appState.search.deliveryTime.length != 0 ? true : false} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item hasFeedback>
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
                    style={{ width: '80%' }}
                    placeholder="Please select Furniture Style"
                    size="large"
                    disabled={appState.search.furniture != '' || appState.search.deliveryTime.length != 0 ? true : false}
                  >
                    {appState.furniture_styles.map((x, i) => (
                      <Option key={i} value={x}>
                        {x}
                      </Option>
                    ))}
                  </Select>)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item hasFeedback>
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
                    style={{ width: '80%' }}
                    size="large"
                    placeholder="Please select Delivery Time"
                    disabled={appState.search.furniture != '' || appState.search.furnitureStyle != 0 ? true : false}
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
              </Col>
            </Row>
          </div>
        </div>
        {this.viewProduk()}
      </div >
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
