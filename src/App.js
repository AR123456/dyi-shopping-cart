import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";

function App() {
  // pass product to main
  const { products } = data;
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=AmIdY1Eb8tY
