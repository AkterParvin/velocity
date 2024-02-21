import { LuArrowLeftRight } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { MdPermContactCalendar, MdMenu, MdClose } from "react-icons/md";
import { CiCamera, CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import Container from "../Shared/Container";

const Nav2 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line no-unused-vars
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const menuLinks = [
    {
      name: "MAN",
      link: "/man",
      submenu: ["Formal Wear", "Causal Wear", "Active Wear", "Foot Wear"],
    },
    {
      name: "WOMAN",
      link: "/woman",
      submenu: ["Formal Wear", "Causal Wear", "Active Wear", "Foot Wear"],
    },
    {
      name: "KIDS",
      link: "/kids",
      submenu: [
        "Girl's Clothing",
        "Boy's Clothing",
        "Girl's Footwear",
        "Boy's Footwear",
      ],
    },
    {
      name: "WELLNESS",
      link: "/wellness",
      submenu: ["Downloadable Yoga Tutorial", "Movie Pass", "E-books"],
    },
  ];

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div
      className={`w-full left-0 top-0 z-[999] ${
        sticky ? "fixed bg-white/90 shadow-md" : "bg-white m"
      }`}
    >
      <Container>
        <nav className="text-black flex justify-between ">
          <div className="flex items-center md:gap-10">
            <div
              onClick={() => setOpen(true)}
              className={`z-[999]  ${
                open ? "text-gray-900 hidden" : "text-black"
              } md:hidden`}
            >
              <MdMenu size={20} />
            </div>
            <div
              className={`md:hidden text-gray-900 absolute w-full min-h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "left-0" : "left-[-100%]"
      }`}
            >
              <div className="flex justify-between items-center mt-3 ">
                <img src="/public/logo.svg" alt="" />
                <div onClick={() => setOpen(false)}>
                  <MdClose size={24} />
                </div>
              </div>

              <div className="md:hidden flex items-center justify-between px-5 rounded-xl border mt-5">
                <div className="flex items-center gap-5">
                  <CiSearch size={20} color="black" />
                  <p className=" py-3 text-neutral-500 rounded-md text-sm font-semibold text-center">
                    Search Product Here
                  </p>
                </div>
                <CiCamera size={20} color="black" />
              </div>
              {/* accordian */}
              {menuLinks.map((item) => (
                <div
                  key={item}
                  tabIndex={0}
                  className="collapse collapse-arrow border-b border-base-300 "
                >
                  <div className="collapse-title ">
                    <a href={item?.link}>{item?.name}</a>
                  </div>
                  <div className="collapse-content">
                    {item.submenu.map((subMenuItem) => (
                      <div
                        key={subMenuItem}
                        tabIndex={0}
                        className="collapse collapse-arrow border-b border-base-300 "
                      >
                        <div className="collapse-title ">{subMenuItem}</div>
                        <div className="collapse-content">
                          <p>No category Found !</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                {/* {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))} */}
                <p className="py-52">hello ami aise </p>
              </ul>
            </div>

            <div>
              <img src="/public/logo.svg" alt="" />
            </div>
            <ul className="max-md:hidden flex items-center gap-1">
              {menuLinks?.map((menu, i) => (
                <li
                  key={i}
                  className="px-6 py-8 relative hover:border-b-4 hover:border-b-black"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={menu?.link}>{menu?.name}</a>
                  {menu.submenu && openIndex === i && (
                    <ul className="absolute top-24 left-0 grid  grid-cols-2 gap-x-10 px-10 py-5 bg-white text-lg font-medium text-black  shadow-xl w-[500px]">
                      {menu.submenu.map((item, index) => (
                        <li key={index} className="py-3">
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-8 md:gap-10">
            <div className=" max-md:hidden flex items-center gap-6 px-5 rounded-md bg-gray-100 hover:border hover:border-black">
              <CiSearch size={20} />
              <p className=" py-3 text-neutral-500 rounded-md text-sm font-semibold text-center">
                search product here
              </p>
              <CiCamera size={20} />
            </div>
            <LuArrowLeftRight size={20} />
            <SlHandbag size={20} />
            <MdPermContactCalendar size={20} />
          </div>
        </nav>
        <div className="md:hidden flex items-center justify-between px-5 rounded-xl border">
          <div className="flex items-center gap-5">
            <CiSearch size={20} color="black" />
            <p className=" py-3 text-neutral-500 rounded-md text-sm font-semibold text-center">
              Search Product Here
            </p>
          </div>
          <CiCamera size={20} color="black" />
        </div>
      </Container>
    </div>
  );
};

export default Nav2;
