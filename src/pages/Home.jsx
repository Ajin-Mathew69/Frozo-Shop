import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "../api/getProducts";
import HeroSection from "../components/HeroSection";
import Container from "../components/Layouts/Container";
import ProductCard from "../components/ProductCard";
import ShopByCategorySection from "../components/ShopByCategorySection";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import GetInTouch from "../components/GetInTouch";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <HeroSection />
      <ShopByCategorySection bgColor="bg-gray-100" />
      {/* Category Products Section Starts */}
      <Container className="mt-12 relative" bgColor="bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <WhyChoose />
      <GetInTouch />

      {/* Category Products Section Ends */}
    </>
  );
}
