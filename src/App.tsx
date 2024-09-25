import "./App.scss";
import Graph from "./components/Graph";

const App = () => {
  return (
    <div className="App">
      <header className="header" />
      <main className="main">
        <Graph />
      </main>
      <footer className="footer" />
    </div>
  );
};

export default App;
