import Container from "../Shared/Container";

const Footer = () => {
  return (
    <>
      <div className="bg-[#e9e2db] font-Roboto">
        <Container>
          <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center py-10">
            <div className="flex items-start max-md:justify-between gap-20 text-black max-md:mt-8">
              <ul className="leading-10 ">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Customer Service</li>
                <li>What&apos;s New</li>
                <li>Terms of Use</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="leading-8">
                <li>Privacy Policy</li>
                <li>Payment Policy</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
                <li>Return Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="italic text-4xl text-black ">
                Get Ready for our <br /> Fun Newsletter !
              </h3>
              <p className="text-black text-sm py-5">
                Subscribe to stay in touch
              </p>
              <input
                className="input input-ghost input-lg border-2 rounded-xl  shadow-md text-sm bg-[#e9e2db] w-full required:"
                type="text"
                placeholder="email@example.com"
              />
              <button className="-ml-28 bg-white py-2 px-5 rounded-lg text-sm text-black">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </div>
      <p className="bg-[#e4d8cde2] text-center text-gray-600 font-medium  py-5 px-5 text-sm ">
        © Copyright 2010 - 2024, Webkul Software (Registered in India). All
        rights reserved.
      </p>
    </>
  );
};

export default Footer;
