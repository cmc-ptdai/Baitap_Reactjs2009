// eslint-disable-next-line
import React from 'react';
import ItemA from './ItemA';

class ItemLi extends React.Component {
  render() {
    const {childrenData} = this.props

    return (
      <>
        { 
          childrenData.map((child,index) => {
            return <li key={index} className={child.isActive ? "active" : ""}>
                      <ItemA dataLink={child}/>
                      {child.children && <ul><ItemLi childrenData={child.children}/></ul>}
                    </li>
          })
        }
      </>
    )
  }
}

export default ItemLi;
