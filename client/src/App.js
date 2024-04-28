import "./App.css";
import AuthContext from "./Context/AuthContext";
import CartContext from "./Context/CartContext";
import ProductItemContext from "./Context/ProductItemContext";
import Routing from "./Routing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Temp from "./components/pushingdata/Temp";


function App() {
  return (
    <AuthContext>
      <ToastContainer
        position="bottom-right"
        autoClose={600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
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
