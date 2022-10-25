import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardContext = () => {
  // 데이터는 서버에서 구분하여 들고 온다
  // 현재는 서버가 아닌 화면에서 데이터를 저장하여 사용
  // 전체를 들고 와 구분하여 사용 -> 서버의 일을 프론트에서 하는중
  const boardlist = useContext(StateContext);
  const { id } = useParams();
  // 원하는 id의 값만 가져오는 것 -> 서버의 일
  const getBoard = () => {
    const board = boardlist.find((board) => board.id == id);
    return board.context;
  };
  return (
    <div>
      <p>{id}번째 context</p>
      <p>{getBoard()}</p>
    </div>
  );
};

export default BoardContext;
