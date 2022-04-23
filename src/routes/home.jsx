import Grid from "../Components/grid/grid";
import Carousel from "../Components/Carousel/Carousel";

import Navbar from "../Components/navbar/navbar";
import Footer from "../Components/footer/footer";
import Slider from "../Components/SLider/slider";
export default function home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Slider />
      <Grid />
      <Footer />
    </>
  );
}
