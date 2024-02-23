import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Shared/Container";

// product images
import product1 from "../../assets/Products/product1.png";
import product2 from "../../assets/Products/product2.png";
import product3 from "../../assets/Products/product3.png";
import product4 from "../../assets/Products/product4.png";
import product5 from "../../assets/Products/product5.png";
import product6 from "../../assets/Products/product6.png";
import product7 from "../../assets/Products/product7.png";
import product8 from "../../assets/Products/product8.png";
import ProductCard from "./ProductCard";

// demo product
const Products = [
  {
    id: 1,
    name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
    price: 49.99,
    img: product1,
  },
  {
    id: 2,
    name: "Adorable BunnyHop Baby Shoes",
    price: 16.99,
    img: product2,
  },
  {
    id: 3,
    name: "Arctic Cozy Knit Unisex Beanie",
    price: 19.99,
    img: product3,
  },
  {
    id: 4,
    name: "Arctic Frost Winter Accessories Bundle",
    price: 17.99,
    img: product4,
  },
  {
    id: 5,
    name: "Arctic Touchscreen Winter Gloves",
    price: 27.99,
    img: product5,
  },
  {
    id: 6,
    name: "Arctic Warmth Wool Blend Socks",
    price: 17.99,
    img: product6,
  },
  {
    id: 7,
    name: "Arctic Bliss Stylish Winter Scarf",
    price: 24.99,
    img: product7,
  },
  {
    id: 8,
    name: "AquaStride Men's Stylish Waterproof Casual Sports Shoes",
    price: 85.99,
    img: product8,
  },
];

const AllProducts = () => {
  // Add to cart button
  const [visible, setVisible] = useState(0);

  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();
  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };
  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };
  const { isLast, isFirst } = slideBegOrNot;

  return (
    <Container>
      <div>
        {/* slider control button and title */}
        <div className="flex items-center justify-between py-10">
          <h3 className="text-3xl text-black font-Playfair font-bold">
            All Products
          </h3>
          <div className="flex items-center text-3xl gap-5 text-black font-Playfair">
            <BsArrowLeft
              className={`Arrow ${isFirst ? "opacity-20" : ""}`}
              onClick={handlePrev}
            />
            <BsArrowRight
              className={`Arrow ${isLast ? "opacity-20" : ""}`}
              onClick={handleNext}
            />
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          className={"mySwiper"}
          ref={SlideRef}
          onSlideChange={onSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1.5,
            },
            502: {
              slidesPerView: 2,
            },
            802: {
              slidesPerView: 2.5,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {Products.map((item) => {
            return (
              <SwiperSlide
                key={item?.id}
                onMouseEnter={() => setVisible(item.id)}
                onMouseLeave={() => setVisible()}
              >
                <ProductCard
                  visible={visible}
                  id={item.id}
                  title={item.name}
                  image={item.img}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default AllProducts;
