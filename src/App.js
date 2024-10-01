import env from "react-dotenv";
import './App.css';

function App() {
  return (
    <div className="App">
      Hello Test
      <div>
        <p>env : {env.API_KEY}</p>
        <p>window env : {window.env.API_KEY}</p>
      </div>
    </div>
  );
}

export default App;
