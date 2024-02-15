import "./App.css";
import AuthContext from "./Context/AuthContext";
import CartContext from "./Context/CartContext";
import ProductItemContext from "./Context/ProductItemContext";
import Routing from "./Routing";
// import Temp from "./components/pushingdata/Temp";


function App() {
  return (
    <AuthContext>
      <CartContext>
        <ProductItemContext>
          <div className="App">
            <Routing />
            {/* <Temp /> //mount this to upload product data with isAdmin=true */}
          </div>
        </ProductItemContext>
      </CartContext>
    </AuthContext>
  );
}

export default App;
