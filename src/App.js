import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Banner from "./components/Banner";
import Recommended from "./components/Recommended";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Banner />
      <Recommended />
    </div>
  );
};

export default App;
