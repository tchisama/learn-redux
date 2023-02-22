import { useDispatch, useSelector } from "react-redux";
import { remove, update  } from "./redux/userSlice";

function App() {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const SwitchUser = ()=>{
    dispatch(update({email:"lora@gmail.com",name:"lora"}))
  }
  const ClearUser = ()=>{
    dispatch(remove())
    console.log("removed")
  }

  return (
    <div className="">
      hello i'm {user.name}, and my email is :{user.email}
      <button onClick={SwitchUser}>go to lora</button>
      <button onClick={ClearUser}>clear User</button>
    </div>
  );
}

export default App;
