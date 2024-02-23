/* eslint-disable react/prop-types */

const Button = ({ btn_text }) => {
    return (
      <button className="bg-[#171e3c] rounded-xl cursor-pointer hover:animate-pulse py-3 px-8  text-gray-300 font-semibold">
        {btn_text}
      </button>
    );
  };
  
  export default Button;
  