import "./App.css";
import AuthContext from "./Context/AuthContext";
import Routing from "./Routing";
// import Temp from "./components/pushingdata/Temp";


function App() {
  return (
    <AuthContext>
      <div className="App">
        <Routing />
        {/* <Temp /> //mount this to upload product data */}
      </div>
    </AuthContext>
  );
}

export default App;
