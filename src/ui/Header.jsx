import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
  return (
    <header className="bg-yellow-400 text-xl tracking-widest flex justify-between py-4 px-4 items-center font-semibold">
      <Link to="/">Pizza Hub</Link>
      <SearchOrder />
      <UserName/>
    </header>
  );
}

export default Header;
