import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardContext = () => {
  const boardlist = useContext(StateContext);
  const { id } = useParams();
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
