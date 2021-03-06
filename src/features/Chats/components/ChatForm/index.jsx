import React from 'react';

import './Input.css';

function ChatForm({ message, setMessage, sendMessage }) {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
            />
            <button
                className="sendButton"
                onClick={(e) => sendMessage(e)}
            >
                <div><i className="fa fa-paper-plane" /></div>

            </button>
        </form>
    );
}

export default ChatForm;
