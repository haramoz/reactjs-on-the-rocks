import './App.css';
import PostData from './PostData';

function App() {

  const buttonHandlePost = () => {
    PostData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2> Hello </h2>
        <button onClick={buttonHandlePost}>Post Data</button>
      </header>
    </div>
  );
}

export default App;