import BookBox from "../books/components/BookBox";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BookCarousel = () => {
  const books = [
    {
      name: "Jungle Book",
      image: "https://i.imgur.com/xLpyU6X.jpg",
      author: "Rudyard Kipling"
    },
    {
      name: "Ikigai",
      image: "https://i.imgur.com/SWdYxZw.jpg",
      author: "Hector Garcia"
    },
    {
      name: "The Alchemist",
      image: "https://i.imgur.com/YLlR1fR.jpg",
      author: "Paulo Coelho"
    }
  ]

  return(
    <>
      <div className="flex items-center justify-center">
        <h1 className="font-Unica text-3xl md:text-7xl lg:mt-16 mt-5 text-yellow-primary">
          Trending Books
        </h1>
      </div>
      <div className="rounded-3xl shadow-lg border-yellow-primary border m-5 lg:m-20 w-4/5 px-10 pt-16 pb-10 text-white">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "white"
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
          }}
          className="mySwiper"
        >
          {books.map((book, idx) => (
            <SwiperSlide key={idx}>
              <BookBox book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BookCarousel;
