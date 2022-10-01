import Header from "./layouts/header/Header";
import Visual from "./components/main-visual/Visual";
import NewCars from "./components/new-cars/NewCars";
import HowItWorks from "components/how-it-works/HowItWorks";
import Featured from "components/featured/Featured";
import FAQ from "components/faq/FAQ";
import Terms from "components/terms/Terms";
import Footer from "layouts/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Visual/>
      <NewCars/>
      <HowItWorks/>
      <Featured/>
      <FAQ/>
      <Terms/>
      <Footer/>
    </div>
  );
}

export default App;


