import React, { useState } from 'react';
import './addUser.css';
import { toast } from 'react-toastify';
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where, } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';
import { useUserStore } from '../../../../lib/userStore';

const AddUser = () => {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore()

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q)
      if(!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (e) {
      console.log(e)
      toast.error(e.message);
    }
  };

  const handleAdUser = async () => {
    const chatRef = collection(db, "chats")
    const userChatRef = collection(db, "userchats")

    try {
      const newChatRef = doc(chatRef)

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });

    } catch (e) {
      console.log(e)
      toast.error(e.message)
    }
  };

  return (
    <div className='add-user-container'>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Username' name='username' />
            <button>Search</button>
        </form>
        {user && <div className="user">
            <div className="detail">
                <img src={user.avatar || "./avatar.png"} alt="" />
                <span>{user.username}</span>
            </div>
            <button onClick={handleAdUser}>Add User</button>
        </div>}
    </div>
  )
}

export default AddUser