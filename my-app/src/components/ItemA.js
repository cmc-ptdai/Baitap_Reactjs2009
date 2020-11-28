// eslint-disable-next-line
import React from 'react';

class ItemA extends React.Component {
  render() {
  const {dataLink} = this.props
    return (
      <>
        <a href={dataLink.link}>
          <div className="icon">
            <i className={dataLink.icon}></i>
          </div>
          <div className="text">
            <b>{dataLink.title}</b>
            <p>{dataLink.subTitle}</p>
          </div>
        </a>
      </>
    )
  }
}

export default ItemA;
