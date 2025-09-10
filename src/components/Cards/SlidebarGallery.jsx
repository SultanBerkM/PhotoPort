import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Arrow({ className, style, onClick, direction }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        flex items-center justify-center
        h-10 w-10 rounded-full
        bg-black/40 hover:bg-black/70 text-white
        transition
        ${direction === "prev" ? "left-2" : "right-2"}
      `}
    >
      {direction === "prev" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
}

function SlidebarGallery() {
  const galleryImagesPath = "/userGallery/";
  const gallery = [];
  for (let i = 1; i <= 12; i++) {
    gallery.push(`${galleryImagesPath}img${i}.JPG`);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: true,
    centerMode: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 5, slidesToScroll: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="w-full overflow-x-hidden max-w-screen-2xl px-4"
    >
      {gallery.map((image, index) => (
        <div key={index} className="px-2">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-auto w-full object-cover rounded-2xl shadow-md border border-gray-300 hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </Slider>
  );
}

export default SlidebarGallery;
