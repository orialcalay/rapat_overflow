import React from 'react';
import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';
import { useHistory } from "react-router-dom";
  
  function onOpenChange(value) {
    console.log('onOpenChange', value);
  }

  function handleClick(info) {
    console.log(`clicked ${info.key}`);
    console.log(info);
  }

  
export default function CommonMenu() {
    
      let history = useHistory()

      const children = [
        <MenuItem key="1" disabled>Rapat Overflow</MenuItem>,
        <SubMenu title={<span className="submenu-title-wrapper">אפשרויות</span>} key="2">
          <MenuItem key="2-1" onClick={() => history.push("/")}>תגיות</MenuItem>
          <MenuItem key="2-2" >משתמשים</MenuItem>
          <MenuItem key="2-3" >עבודות מזדמנות</MenuItem>
        </SubMenu>,
        <MenuItem key="3" onClick={() => history.push("/login")}>כניסה</MenuItem>,
        <MenuItem key="4" onClick={() => history.push("/register")}>הרשמה</MenuItem>,
        <MenuItem key="5" onClick={() => history.push("/questions")}>שאלות</MenuItem>,
      ];

      
      return (
        <div>
          <Menu
            onClick={handleClick}
            onOpenChange={onOpenChange}
            selectedKeys={['0']}
            mode="horizontal"
            openAnimation="slide-up"
          >
            {children}
          </Menu>
        </div>
      );
  }
  