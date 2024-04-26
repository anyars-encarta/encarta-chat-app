import React, { useState } from 'react';
import './chatList.css';

const ChatList = () => {
  const [minus, setMinus] = useState(false)

  return (
    <div className='chat-list-container'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img
          src={!minus ? "./plus.png" : "./minus.png"} alt=""
          className='add'
          // onClick={() => setMinus(!minus)} 
          onClick={() => setMinus((prev) => !prev)}
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
    </div>
  );
};

export default ChatList