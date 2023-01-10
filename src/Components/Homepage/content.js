import React from 'react';
import Header from '../Header';
export default function HomePageContent() {
  return (
    <div className="homepage-container">
      <Header checkUserLogin ={"notLoggedIn"} />
      <div className="content">
        <div className="left-side">
          <div className="text">
            <p>Start Your</p>
          </div>
          <div className="text">
            <p>Technology Career</p>
          </div>
          <div className="text">
            <p>With Free Training!</p>
          </div>
          <div className="desc">
            <p>Completely Free</p>
          </div>
        </div>
        <div className="right-side">
          <div className="icon html">
            <i className="fa-brands fa-html5"></i>
          </div>
          <div className="icon css">
            <i className="fa-brands fa-css3"></i>
          </div>
          <div className="icon js">
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="icon react">
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="icon git">
            <i className="fa-brands fa-git"></i>
          </div>
        </div>
      </div>
    </div>
  )
}