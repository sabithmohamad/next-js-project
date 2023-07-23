import Link from 'next/link';
import React from 'react';
import menu_data from './menu-data';

const NavMenus = () => {
  const ulStyles = {
    marginRight: '-202px',
    /* Add other styles if needed */
  };

  return (
    <ul style={ulStyles}>
      {menu_data.map((menu, i) => (
        <li key={i} className={`${menu ? 'has-dropdown' : ''}
          ${menu.mega_menu ? 'has-mega-menu' : ''}`}>
          <Link href={menu.link}>
            <a>{menu.title} {menu.has_dropdown && <i className="fal fa-angle-down"></i>}</a>
          </Link>
          {menu.has_dropdown && <ul className="submenu text-start">
            {menu.sub_menus.map((sub_m, i) => (
              <li key={i}>
                <Link href={sub_m.link}>
                  <a>{sub_m.title}</a>
                </Link>
              </li>
            ))}
          </ul>}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;
