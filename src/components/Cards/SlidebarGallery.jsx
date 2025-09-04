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
  const images = [
    "/dashboardPhots/img12.JPG",
    "/dashboardPhots/img2.JPG",
    "/dashboardPhots/img8.JPG",
    "/dashboardPhots/img7.JPG",
    "/dashboardPhots/img11.JPG",
    "/dashboardPhots/img1.JPG",
    "/dashboardPhots/img6.JPG",
    "/dashboardPhots/img10.JPG",
    "/dashboardPhots/img9.JPG",
    "/dashboardPhots/img3.JPG",
    "/dashboardPhots/img4.JPG",
    "/dashboardPhots/img5.JPG",
  ];

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
      { breakpoint: 768,  settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false, dots: true } },
      { breakpoint: 480,  settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <Slider
      {...settings}
      className="w-full overflow-x-hidden max-w-screen-2xl mx-auto px-4"
    >
      {images.map((image, index) => (
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
