import "./App.css";
import AboutMe from "./components/AboutMe";
import Alethia from "./components/Alethia";
import Banner from "./components/Banner";
import Carla from "./components/Carla";
import DopeThing from "./components/DopeThing";
import Fitness from "./components/Fitness";
import Footer from "./components/Footer";
import GraphicDesigns from "./components/GraphicDesigns";
import Header from "./components/Header";
import LogoDesing from "./components/LogoDesing";
import Services from "./components/Services";
import WritingSamples from "./components/WritingSamples";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <DopeThing />
      <LogoDesing />
      <GraphicDesigns />
      <Fitness />
      <Alethia />
      <Carla />
      <WritingSamples />
      <AboutMe />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
