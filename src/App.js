import GMaps from "./components/GMaps";

function App() {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: 40}}> 
        <p> CONAT </p>
      </div>
      <div style={{ margin: 50, border: '5px solid black' }}>
        <GMaps>

        </GMaps>
      </div>
    </div>
  );
}

export default App;
