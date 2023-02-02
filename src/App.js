import './App.css';
import './normalize.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-btn">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
            <div className="avatar">
            </div>
            <div className="message">
              Hello, World!
            </div>
            </div>
          </div>

          <div className="chat-message chatgpt">
            <div className="chat-message-center">
            <div className="avatar chatgpt">
            <img src={require('./chatgpt.png')} height={40} width={40} />
            </div>
            <div className="message">
              I am an AI.
            </div>
            </div>
          </div>

        </div>
          <div className="chat-container">
          <textarea className="chat-input-textarea" rows="1"></textarea>
          </div>
      </section>
    </div>
  );
}

export default App;
