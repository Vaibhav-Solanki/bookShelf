import Grid from "../Components/grid/grid";
import Carousel from "../Components/carousel/carousel";

import Navbar from "../Components/navbar/navbar";
import Footer from "../Components/footer/footer";

export default function home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Grid />
      <Footer />
    </>
  );
}
