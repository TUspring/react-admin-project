

import React, { Component } from 'react'
import { Button, Divider, Input, Table, Tag, Space } from 'antd'
import { hashHistory/* , Link */ } from 'react-router'
import '@styles/invoice.less'
import { invoiceList } from '@apis/manage';

export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invoiceListData: [],
      formItem: {
        keyword: '',
        page: 1,
        limits: 20,
      },
    }
  }

  componentWillMount() {
    invoiceList(this.state.formItem, (res) => {
      this.setState({ invoiceListData: res.data.list });
    });
  }

  inputChange(e) {
    console.log(e.target.value);
    const obj = this.state.formItem
    obj.keyword = e.target.value
    this.setState({
      formItem: obj,
    })
  }
  onClickSend = () => {
    console.log('点击发送')
    invoiceList(this.state.formItem, (res) => {
      this.setState({ invoiceListData: res.data.list });
    });
  }

  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'index',
        key: 'id',
        align: 'center',
      },
      {
        title: '订单号',
        dataIndex: 'plate_number',
        key: 'order_number',
        align: 'center',
      },
      {
        title: '下单人',
        dataIndex: 'receiver',
        key: 'receiver',
        align: 'center',
      },
      {
        title: '城市',
        dataIndex: 'city',
        key: 'order_city',
        align: 'center',
      },
      {
        title: '广告发布费',
        dataIndex: 'price',
        key: 'order_publishing_cost',
        align: 'center',
      },
      {
        title: '订单金额',
        dataIndex: 'price',
        key: 'order_total_cost',
        align: 'center',
      },
    ];
    const {
      invoiceListData,
    } = this.state;
    return (
      <div className="list-wrap">
        <Input placeholder="搜索" className="search-input" onChange={this.inputChange.bind(this)} />
        <Button type="primary" className="search-button" onClick={this.onClickSend.bind(this)}>
          搜索
        </Button>
        <div>
          <Table dataSource={invoiceListData} columns={columns} />
        </div>
      </div>
    )
  }
}
