import { useEffect, useState } from "react";
import Homepages from "./Pages/Homepages";
import Login from "./Pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase";

function App() {

  const [loggedInUser, setloggedInUser] = useState(null)
  useEffect(() => {
    const subScribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedInUser(user.uid)

      } else {
        setloggedInUser(null)
      }

    });
    return() => subScribe()
  }, [])

  // const loggedInUser = 'Diksha'
  return (
    <div className="flex justify-center ">
      {
        loggedInUser ? <Homepages /> : <Login />
      }
    </div>
  );
}

export default App;
