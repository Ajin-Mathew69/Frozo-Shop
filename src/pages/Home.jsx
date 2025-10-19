import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "../api/getProducts";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Container from "../components/Layouts/Container";
import ProductCard from "../components/ProductCard";
import ShopByCategorySection from "../components/ShopByCategorySection";
import ProductCardSkeleton from "../components/SkeletonLoaders/ProductCardSkeleton";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HeroSection />
      <ShopByCategorySection bgColor="bg-gray-100" />

      <Container className="relative" bgColor="bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            380: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          className="mySwiper"
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <ProductCardSkeleton />
                </SwiperSlide>
              ))
            : products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>

      <WhyChoose />
      <GetInTouch />
    </>
  );
}
