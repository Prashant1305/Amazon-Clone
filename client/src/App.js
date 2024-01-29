import Navbar from "./components/header/Navbar";
import MainComponent from "./components/home/MainComponent";
import NewNav from "./components/newNavbar/NewNav";


function App() {
  return (
    <div className="App">

      <Navbar />
      <NewNav />
      <MainComponent />
    </div>
  );
}

export default App;
