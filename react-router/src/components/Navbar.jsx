import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* NavLink의 경우 isActive라는 값을 통해 활성화가 되었을 때 디자인 추가 */}
      {/* className도 동일한 형태로 작성 가능 */}
      <NavLink
        to="/"
        // 사용할 때는 아래와 같은 화살표 함수 형태로 사용
        // {isActive} 형식으로 구조화 할당을 통해 가져옴
        style={({ isActive }) => (isActive ? { color: "green" } : undefined)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="boardlist"
        style={({ isActive }) => (isActive ? { color: "green" } : undefined)}
      >
        Board
      </NavLink>
      <NavLink
        to="writeform"
        style={({ isActive }) => (isActive ? { color: "green" } : undefined)}
      >
        Write
      </NavLink>
    </div>
  );
};

export default Navbar;
