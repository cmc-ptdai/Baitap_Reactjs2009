// eslint-disable-next-line
import React from 'react';
import ItemA from './ItemA'

class ItemLi extends React.Component {
  render() {
  const {childrenData} = this.props
    return (
      <>
        { 
          childrenData.map((child,index) => {
            if (child.isActive) {
              return <li key={index} className="active">
                        <ItemA dataLink={child}/>
                        {child.children && <ul> <ItemLi childrenData={child.children}/> </ul>}
                     </li>
            } else {
              return <li key={index}>
                        <ItemA dataLink={child}/>
                        {child.children && <ul> <ItemLi childrenData={child.children}/> </ul>}
                     </li>
            }
          })
        }
      </>
    )
  }
}

export default ItemLi;
