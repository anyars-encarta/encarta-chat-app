import React, { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState('');

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setShowEmojiPicker(false);
  }

  return (
    <div className='chat-container'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, quam laborum accusantium modi sapiente magni tempore
              voluptatibus ad culpa? Debitis, atque tenetur nesciunt
              mollitia iste repellat quis eligendi eveniet veniam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="./masterDP.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, quam laborum accusantium modi sapiente magni tempore
              voluptatibus ad culpa? Debitis, atque tenetur nesciunt
              mollitia iste repellat quis eligendi eveniet veniam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, quam laborum accusantium modi sapiente magni tempore
              voluptatibus ad culpa? Debitis, atque tenetur nesciunt
              mollitia iste repellat quis eligendi eveniet veniam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, quam laborum accusantium modi sapiente magni tempore
              voluptatibus ad culpa? Debitis, atque tenetur nesciunt
              mollitia iste repellat quis eligendi eveniet veniam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="./masterDP.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, quam laborum accusantium modi sapiente magni tempore
              voluptatibus ad culpa? Debitis, atque tenetur nesciunt
              mollitia iste repellat quis eligendi eveniet veniam!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder='type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setShowEmojiPicker((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={showEmojiPicker} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat