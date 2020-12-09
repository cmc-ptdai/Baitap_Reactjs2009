import React from 'react';


class APP extends React.Component {
  onDelete = () => {
    this.props.onDelete(this.props.dataItem.id);
  }
  onCheck = () => {
    this.props.onCheck(this.props.dataItem.id);
  }
  render() {
    const {dataItem} = this.props
    if (dataItem.status === true) {
      return (
        <div className="item__task" key={dataItem.id}>
          <span><input type="checkbox" onClick={this.onCheck} defaultChecked/></span>
          <label className="completed">{dataItem.todo}</label>
          <button onClick={this.onDelete}><i className="fas fa-times"></i></button>
        </div>
      )
    } else {
      return (
        <div className="item__task" key={dataItem.id}>
           <span><input type="checkbox" onClick={this.onCheck}/></span>
          <label>{dataItem.todo}</label>
          <button onClick={this.onDelete}><i className="fas fa-times"></i></button>
        </div>
      )
    }
  }
}

export default APP;
