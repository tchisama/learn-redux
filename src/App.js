import { useSelector } from "react-redux";

function App() {
  const name = useSelector(state=>state.user.name)
  const email = useSelector(state=>state.user.email)
  return (
    <div className="">
      hello i'm {name}, and my email is :{email}
    </div>
  );
}

export default App;
