import "./App.css";
import Layout from "./page/Layout";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Writeform from "./page/Writeform";
import BoardList from "./page/BoardList";
import BoardContext from "./page/BoardContext";
import { SetContext, StateContext } from "./context/ContextComp";

function App() {
  const [boardlist, setBoard] = useState([
    {
      id: 1,
      context: "first",
    },
    {
      id: 2,
      context: "second",
    },
    {
      id: 3,
      context: "third",
    },
  ]);

  return (
    <div className="App">
      {/* 데이터를 전체적으로 관리하기 위해 Context사용 */}
      <StateContext.Provider value={boardlist}>
        <SetContext.Provider value={setBoard}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* path='/' 대신 index를 사용할 수 있다 */}
              <Route index element={<Home />} />
              <Route path="writeform" element={<Writeform />} />
              <Route path="boardlist" element={<BoardList />}>
                {/* :id는 params 값을 사용 */}
                <Route path=":id" element={<BoardContext />} />
              </Route>
            </Route>
          </Routes>
        </SetContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
