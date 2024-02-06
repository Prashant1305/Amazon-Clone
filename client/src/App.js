import "./App.css";
import AuthContext from "./Context/AuthContext";
import CartContext from "./Context/CartContext";
import Routing from "./Routing";
// import Temp from "./components/pushingdata/Temp";


function App() {
  return (
    <AuthContext>
      <CartContext>
        <div className="App">
          <Routing />
          {/* <Temp /> //mount this to upload product data with isAdmin=true */}
        </div>
      </CartContext>
    </AuthContext>
  );
}

export default App;
