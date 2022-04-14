import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />{" "}
            {/* slug is an element of data.js */}
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
