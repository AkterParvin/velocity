import Container from "./Shared/Container";
import img7 from "../assets/image7.webp";
const NewBoldCollections = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-20 lg:pl-36">
          <div className="flex-1 ">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl lg:text-5xl font-Playfair font-bold text-slate-800 leading-tight pb-5">
                Get Ready for our new Bold Collections!
              </h2>
              <p className="text-lg font-medium leading-7 font-Roboto text-neutral-400">
                Introducing Our New Bold Collections! Elevate your style with
                daring designs and vibrant statements. Explore striking patterns
                and bold colors that redefine your wardrobe. Get ready to
                embrace the extraordinary!
              </p>
              <button className="py-3 px-8 rounded-xl bg-[#171e3c] mt-5 text-white font-bold">
                View All
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img className="rounded-xl" src={img7} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewBoldCollections;
