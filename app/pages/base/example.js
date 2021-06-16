import React, { Component } from 'react'
import { Button } from 'antd'

export default class app extends Component {
  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  render() {
    return (
      <div className="page">
        示范页面jjja
        <div>
          <Button onClick={this.onClickSend}>发送</Button>
        </div>
      </div>
    )
  }
}
