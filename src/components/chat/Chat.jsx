import React, { useRef, useState, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const pickerRef = useRef(null);
  const endRef = useRef(null);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setOpen(false); // Close picker if clicked outside
    }
  };



  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: "smooth" });
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="chat">
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
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              commodi blanditiis magnam non et! Aliquid quisquam animi
              aspernatur explicabo neque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              commodi blanditiis magnam non et! Aliquid quisquam animi
              aspernatur explicabo neque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              commodi blanditiis magnam non et! Aliquid quisquam animi
              aspernatur explicabo neque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              commodi blanditiis magnam non et! Aliquid quisquam animi
              aspernatur explicabo neque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              commodi blanditiis magnam non et! Aliquid quisquam animi
              aspernatur explicabo neque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/3585093/pexels-photo-3585093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              commodi blanditiis magnam non et! Aliquid quisquam animi
              aspernatur explicabo neque.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji" ref={pickerRef}>
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />

          <div className="picker">
            {/* <EmojiPicker open={open} onEmojiClick={handleEmoji}  /> */}
            {open && <EmojiPicker onEmojiClick={handleEmoji} />}
          </div>
        </div>
        <button className="sendButton">
          <img src="/send.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
