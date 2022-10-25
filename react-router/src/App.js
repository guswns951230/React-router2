import "./App.css";
import Layout from "./page/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Writeform from "./page/Writeform";
import BoardList from "./page/BoardList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* path='/' 대신 index를 사용할 수 있다 */}
          <Route index element={<Home />} />
          <Route path="writeform" element={<Writeform />} />
          <Route path="boardlist" element={<BoardList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
