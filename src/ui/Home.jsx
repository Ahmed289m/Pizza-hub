import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const user = useSelector(store=>store.user.userName);
  return (
   <div className="my-10 px-4 text-center sm:my-16 ">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        <span className="text-yellow-500">Savor the authentic taste of Italy,</span>
        <br />
        one slice at a time.
      </h1>
      {!user ?<CreateUser/>:<Button to='/menu' type="primary">Continue Ordering</Button>}
      
    </div>
  );
}

export default Home;
