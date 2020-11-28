// eslint-disable-next-line
import React from 'react';

class ItemLi extends React.Component {
  render() {
  const {childrenData} = this.props
    return (
      <>
        { 
          childrenData.map((child, index) => {
            if (child.isActive) {
              return <li key={index} className="active">
                        <a href={child.link}>
                          <div className="icon">
                            <i className={child.icon}></i>
                          </div>
                          <div className="text">
                            <b>{child.title}</b>
                            <p>{child.subTitle}</p>
                          </div>
                        </a>
                        {child.children && <ul> <ItemLi childrenData={child.children}/> </ul>}
                     </li>
            } else {
              return <li key={index}>
                        <a href={child.link}>
                          <div className="icon">
                            <i className={child.icon}></i>
                          </div>
                          <div className="text">
                            <b>{child.title}</b>
                            <p>{child.subTitle}</p>
                          </div>
                        </a>
                        {child.children && <ul><ItemLi childrenData={child.children}/></ul>}
                     </li>
            }
          })
        }
      </>
    )
  }
}

export default ItemLi;
