import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardList = () => {
  // 값을 가져올 때, value에 객체로 들어오지 않았다면 구조화할당을 할 필요 없다
  const boardlist = useContext(StateContext);
  return (
    <div>
      {boardlist &&
        boardlist.map((item) => (
          <Link to={"/boardlist/" + item.id} key={item.id}>
            {item.id}
          </Link>
        ))}
      {/* 
        Outlet을 통해 props값을 전달할 수 없다
        props값을 전달할 때는 component를 통해 직접 전달
        -> App에 있는 component로 전달
      */}
      <Outlet />
    </div>
  );
};

export default BoardList;
