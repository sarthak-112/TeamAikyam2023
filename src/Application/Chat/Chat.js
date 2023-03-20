import React, {useState} from 'react'
import './Chat.css'


const Chat = () => {
    
    const [messages, setMessages] = useState([
        {
          text: "Hi there! Feel free to share your thoughts.",
          sender: "ChatGPT",
        }
      ]);
    
      const [currentMessage, setCurrentMessage] = useState("");
    
      const handleChange = (event) => {
        setCurrentMessage(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = {
          text: currentMessage,
          sender: "Me",
        };
        setMessages([...messages, newMessage]);
        setCurrentMessage("");
      };
      
    
      return (
        <div className="chat-box">
          <div className="contacts">
           <h1>Contacts</h1>
            <div className="contact">
              <div className="avatar"></div>
              <div className="name">ChatGPT</div>
            </div>
          </div>
          <div className="chat">
            <div className="chat-history">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.sender === "Me" ? "chat-message right" : "chat-message left"
                  }
                >
                  <div className="name">{message.sender}</div>
                  <div className="text">{message.text}</div>
                </div>
              ))}
            </div>
            <form className="chat-input" onSubmit={handleSubmit}>
              <input type="text" placeholder="Type a message" value={currentMessage} onChange={handleChange} />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      );
    }

export default Chat