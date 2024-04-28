import React, { useEffect, useState } from 'react';
import './chatList.css';
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useChatStore } from '../../../lib/chatStore';

const ChatList = () => {
  const [addUser, setAddUser] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data()

        return { ...item, user }
      });

      const chatData = await Promise.all(promises)

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    changeChat(chat.chatId, chat.user)
  };

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

      {chats.map((chat) => (
        <div 
        className="item" 
        key={chat.chatId} 
        onClick={() => handleSelect(chat)}
        style={{ backgroundColor: chat?.isSeen ? 'transparent' : '#5183fe' }}
        >
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addUser && <AddUser />}
    </div>
  );
};

export default ChatList