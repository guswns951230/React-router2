import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SetContext, StateContext } from "../context/ContextComp";

const Writeform = () => {
  const navigate = useNavigate();

  const boardlist = useContext(StateContext);
  const setBoard = useContext(SetContext);
  const [context, setContext] = useState("");

  // 데이터와 관련된 내용은 서버측에서 관리
  // 서버를 사용하고 있지 않기 때문에, 전체 데이터를 리액트에서 관리
  const addBoard = () => {
    const newList = boardlist.concat({
      id: boardlist.length + 1,
      context: context,
    });
    setBoard(newList);
    // Link와 같은 일을 할 수 있다
    // -1을 넣으면 뒤로가기 가능
    navigate("/boardlist");
  };

  return (
    <div>
      <h1>Write form</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setContext(e.target.value);
        }}
      ></textarea>
      <button onClick={addBoard}>추가</button>
    </div>
  );
};

export default Writeform;
