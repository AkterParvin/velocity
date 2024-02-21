import Container from "./Shared/Container";
import img8 from "../assets/image8.webp";
import img9 from "../assets/image9.webp";
const NewCollections = () => {
  return (
    <div className="bg-white py-10 font-Playfair">
      <Container>
        <h1 className="text-center font-bold text-3xl lg:text-6xl  text-slate-800 leading-snug py-10">
          The game with our <br /> new additions!{" "}
        </h1>
        {/* 1st Section */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
          {/* 1st card */}
          <div className="relative ">
            <img className="rounded-2xl w-full" src={img8} alt="" />
            <h3 className=" absolute bottom-10 left-10 text-3xl lg:text-5xl italic font-semibold text-black leading-tight">
              Our <br className="max-lg:hidden" /> Collections
            </h3>
          </div>
          {/* 2nd card */}
          <div className="relative ">
            <img className="rounded-2xl w-full" src={img9} alt="" />
            <h3 className=" absolute bottom-10 left-10 text-3xl lg:text-5xl italic font-semibold text-black leading-tight">
              Our <br className="max-lg:hidden"  /> Collections
            </h3>
          </div>
         
        </div>
      </Container>
    </div>
  );
};

export default NewCollections;
