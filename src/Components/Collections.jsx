import img1 from "../assets/image1.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image3.webp";
import img4 from "../assets/image4.webp";
import img5 from "../assets/image5.webp";
import img6 from "../assets/image6.webp";
import img7 from "../assets/image10.webp";
import Container from "./Shared/Container";
const Collections = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <h1 className="text-center font-bold text-4xl lg:text-6xl font-Playfair text-slate-800 leading-snug py-10">
          The game with our <br /> new additions!
        </h1>
        {/* 1st Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-Playfair">
          {/* 1st card */}
          <div className="text-center relative ">
            <img className="rounded-2xl w-full" src={img1} alt="" />
            <h3 className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black">
              Our Collections
            </h3>
          </div>
          {/* 2nd card */}
          <div className="text-center relative ">
            <img className="rounded-2xl w-full" src={img2} alt="" />
            <h3 className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black">
              Our Collections
            </h3>
          </div>
          {/* 3rd card */}
          <div className="text-center relative ">
            <img className="rounded-2xl w-full" src={img3} alt="" />
            <h3 className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black">
              Our Collections
            </h3>
          </div>
          {/* 4th card */}
          <div className="text-center relative ">
            <img className="rounded-2xl w-full" src={img4} alt="" />
            <h3 className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black">
              Our Collections
            </h3>
          </div>
          {/* 5th card */}
          <div className="text-center relative ">
            <img className="rounded-2xl w-full" src={img5} alt="" />
            <h3 className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black">
              Our Collections
            </h3>
          </div>
          {/* 6th card */}
          <div className="text-center relative ">
            <img className="rounded-2xl w-full" src={img6} alt="" />
            <h3 className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black">
              Our Collections
            </h3>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-20">
          <div className="flex-1">
            <img className="rounded-xl" src={img7} alt="" />
          </div>
          <div className="flex-1 ">
            <div className="w-full lg:w-2/3">
            <h2 className="text-3xl lg:text-5xl font-bold font-Playfair text-black leading-tight pb-5" >
              Get Ready for our new Bold Collections!
            </h2>
            <p className="text-lg font-Roboto text-neutral-500 font-medium leading-7">
              Introducing Our New Bold Collections! Elevate your style with
              daring designs and vibrant statements. Explore striking patterns
              and bold colors that redefine your wardrobe. Get ready to embrace
              the extraordinary!
            </p>
            <button className="py-4 px-8 rounded-xl bg-[#171e3c] mt-5 text-white font-bold">
              View All
            </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Collections;
