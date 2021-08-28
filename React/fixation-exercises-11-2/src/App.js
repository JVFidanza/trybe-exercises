import logo from './logo.svg';
import './App.css';
import Image from './Image.js';


{/* <Image src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt='balbalbalblal'/> */}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' className="App-logo" alt="logo" />
        {/* <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt='balbalbalblal'/> */}

        <p>
          POURRA
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
