import React from 'react';
import './style.css'

class Exercise2 extends React.Component {
  render() {
    return (
      <div className="quiz">
        <div className="title">
          <h1><b>Reactjs quiz</b></h1>
          <p className="bar"></p>
          <p>0% complete</p>
        </div>
        <hr></hr>
        <div className="content">
          <span>What is the full form of HTTP?</span>
          <p>a.Hyper text transfer package</p>
          <p>b.Hyper text transfer protocol</p>
          <p>c.Hyphenation text test program</p>
          <p>d.None of the above</p>
        </div>
        <hr></hr>
        <div className="footer">
          <button className="btn_left">Back</button>
          <button className="btn_right">Skip</button>
        </div>
      </div>
    )
  }
}
export default Exercise2;