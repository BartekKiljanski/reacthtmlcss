import "./App.css";

import Header from "./components/Header";
import ListServices from "./components/ListServices";
import Sidebar from "./components/Sidebar";

import Person from "./components/Person";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Person />
      <ListServices />
      <Footer />
    </div>
  );
}

export default App;
