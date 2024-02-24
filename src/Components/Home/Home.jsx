import Collections from "../Collections";
import NewBoldCollections from "../NewBoldCollections";
import NewCollections from "../NewCollections";
import OurSupport from "../OurSupport";
import AllProducts from "../ProductSlide/AllProducts";
import FeaturedProducts from "../ProductSlide/FeaturedProducts";
import ProductSlide from "../ProductSlide/ProductSlide";

const Home = () => {
  return (
    <div>
      <ProductSlide/>
      <Collections />
      <FeaturedProducts/>
      <NewCollections />
      <AllProducts/>
      <NewBoldCollections />
      <OurSupport />
    </div>
  );
};

export default Home;
