import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Home></Home>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
