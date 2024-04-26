import React, { useState } from 'react';
import './chatList.css';
import AddUser from './addUser/AddUser';

const ChatList = () => {
  const [addUser, setAddUser] = useState(false);

  return (
    <div className='chat-list-container'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img
          src={addUser ? "./minus.png" : "./plus.png"} alt=""
          className='add'
          // onClick={() => setAddUser(!addUser)} 
          onClick={() => setAddUser((prev) => !prev)}
        />
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello, how are you?</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello, how are you?</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello, how are you?</p>
        </div>
      </div>

      {addUser && <AddUser />}
    </div>
  );
};

export default ChatList