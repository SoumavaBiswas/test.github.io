// import logo from './logo.svg';
import './App.css';
import './index.css';
import './Sticker.css'
import Home from './Home';
import { User, UserWithState } from './User';
import { Sticker, Grass } from './Sticker';
import PropsTest from './TestProps';


function App() {
  const person = {
    name: 'Soumava',
    age: 26,
    degree: 'M.Sc'

  }
  return (
    <div className="App">
      <div className="dog-sticker" style={{ marginLeft: "auto", top: "5%" }}>
        <Sticker alignment={"right"} />
      </div>
      {/* <div className="dog-sticker" style={{ marginRight: "auto", bottom: "5%" }}>
        <Sticker alignment={"left"} />
      </div> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Working? Yesssss!!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <Home />
        <User /> */}
        <PropsTest {...person} />
        <UserWithState />


      </header>
      <div style={{ height: "2000Px" }}>
        <Grass />
      </div>

    </div>
  );
}

export default App;
