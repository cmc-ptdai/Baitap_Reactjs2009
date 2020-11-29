import React from 'react';

class ItemSearch extends React.Component {
  render() {
    return (
      <li>
        <div className="search">
          <input type="text" name='search' placeholder="Search......"/>
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </li>
    )
  }
}

export default ItemSearch;
