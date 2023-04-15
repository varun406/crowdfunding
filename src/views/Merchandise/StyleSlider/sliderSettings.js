import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

export const settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: (
    <ArrowBackIosNewOutlined
      size="sm"
      sx={{
        color: "white",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  nextArrow: (
    <ArrowForwardIosOutlined
      sx={{
        color: "white",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 855,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
