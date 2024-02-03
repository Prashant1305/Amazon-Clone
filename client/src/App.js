import "./App.css";
import AuthContext from "./Context/AuthContext";
import Routing from "./Routing";


function App() {
  return (
    <AuthContext>
      <div className="App">
        <Routing />
      </div>
    </AuthContext>
  );
}

export default App;
