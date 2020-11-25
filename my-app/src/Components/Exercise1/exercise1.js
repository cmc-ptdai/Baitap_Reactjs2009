import React from 'react';
import './style.css'

class Exercise1 extends React.Component {
  render() {
    return (
      <div className="breadcrumb">
        <ul>
          <li>
            <a>
              <i class="far fa-home-lg"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-flask"></i>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fal fa-chevron-double-right"></i>
              <span>Breadcrumb</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-rocket"></i>
              <span>Getting started</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-arrow-down"></i>
              <span>Download</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Exercise1;