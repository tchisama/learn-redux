import { useDispatch, useSelector } from "react-redux";
import { update } from "./redux/userSlice";

function App() {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const SwitchUser = ()=>{
    dispatch(update({email:"lora@gmail.com",name:"lora"}))
  }

  return (
    <div className="">
      hello i'm {user.name}, and my email is :{user.email}
      <button onClick={SwitchUser}>go to lora</button>
    </div>
  );
}

export default App;
