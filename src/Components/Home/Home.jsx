import Collections from "../Collections";
import NewBoldCollections from "../NewBoldCollections";
import NewCollections from "../NewCollections";
import OurSupport from "../OurSupport";
import ProductSlide from "../ProductSlide/ProductSlide";

const Home = () => {
  return (
    <div>
      <Collections />
      <ProductSlide/>
      <NewCollections />
      <NewBoldCollections />

      <OurSupport />
    </div>
  );
};

export default Home;
