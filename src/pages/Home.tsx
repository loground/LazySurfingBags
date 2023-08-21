import Description from "../Components/Description";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MainCaruselle from "../Components/MainCaruselle";
import Renders3d from "../Components/Renders3d";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <MainCaruselle />
      <Renders3d />
      <Description />
      <Footer />
    </div>
  );
};

export default Home;
