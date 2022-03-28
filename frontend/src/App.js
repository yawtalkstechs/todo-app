import { render } from '@testing-library/react';
import React, { Component } from 'react';

const list = [
  {"id":1,"title":"Learn Tailwind CSS","body":"- Learn containers\r\n- Learn Flexbox\r\n- Learn Grid\r\n- Learn how to create a nav-bar"},
  {"id":2,"title":"Amazon S3 buckets","body":"- Create an AWS s3 buckets\r\n- Connect django app to the buckets"},
  {"id":3,"title":"Revise on ML","body":"- Revise on Supervised Learning.\r\n- Revise on unsupervised Learning."}]

class App extends Component {
  constructor(props){
    super(props);
    this.state = { list };
  }
  render(){
    return (
      <div class="justify-content:center">
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;