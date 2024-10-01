import './App.css';

function App() {
  return (
    <div className="App">
      Hello Test
      <div>
        <p>env : {process.env.REACT_APP_API_KEY}</p>
      </div>
    </div>
  );
}

export default App;
