import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header max-width">
      <img
        src="https://scontent.fidr4-2.fna.fbcdn.net/v/t1.6435-9/78529864_511816032747820_5472546444076384256_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aFiFxUGmjIwAX86aMFP&_nc_ht=scontent.fidr4-2.fna&oh=00_AT81jhnyVCXKp3M0EwlwDx3T1CEaIciM4UA859qwOyoL_g&oe=61EE254D"
        alt="Easymeals-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Pavan</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;