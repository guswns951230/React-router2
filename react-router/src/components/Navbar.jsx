import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="boardlist">Board</NavLink>
      <NavLink to="writeform">Write</NavLink>
    </div>
  );
};

export default Navbar;
