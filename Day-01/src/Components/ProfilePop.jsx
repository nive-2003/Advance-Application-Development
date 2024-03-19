import React, { useState, useEffect, useRef } from 'react';
import user from '../assets/user.png';
import edit from '../assets/edit.png';
// import inbox from '../assets/envelope.png';
import settings from '../assets/settings.png';
import help from '../assets/question.png';
import logout from '../assets/log-out.png';

function ProfilePop() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative" ref={menuRef}>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <img src={user} alt="User" className="h-10 rounded-full" />
        </div>

        <div className={`absolute right-0 mt-2 bg-white shadow-lg rounded-md ${open ? 'block' : 'hidden'}`}>
          <div className="p-4">
            <h3 className="text-xl font-bold">The Kiet</h3>
            <span className="text-sm">Website Designer</span>
          </div>
          <ul>
            <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
            <DropdownItem img={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="flex items-center p-2 hover:bg-gray-100">
      <img src={props.img} alt="Dropdown Icon" className="h-6 w-6 mr-2" />
      <a className="text-gray-800">{props.text}</a>
    </li>
  );
}

export default ProfilePop;
