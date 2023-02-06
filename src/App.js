import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          src="https://placekitten.com/200/200"
          alt="cat pic"
          radius="100px"
        />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent
          text="Ciao"
          textColor="green"
          background="lightgreen"
          padding="1.5em 8em"
          margin="0.5em"
          border="2px solid green"
        />
      </header>
    </div>
  );
}

export default App;
