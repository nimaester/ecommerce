import React from "react";
import { Image, Flex, Box, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../../lib/query";
import { DefaultContainer } from "../../elements/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Carousel = ({ title }) => {
  //Fetch products from strapi
  const [result] = useQuery({
    query: PRODUCT_QUERY,
  });

  const ButtonStyle = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#525F6E",
          borderRadius: "10rem",
          _hover: {
            cursor: "pointer",
          },
        }}
        onClick={onClick}
      />
    );
  };

  const { data, fetching, error } = result;
  if (fetching) return null;
  if (error) return null;
  const inventories = data.inventories.data;

  // const [defaultImage, setDefaultImage] = useState({});

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ButtonStyle />,
    prevArrow: <ButtonStyle />,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: "false",
        },
      },
    ],
  };

  return (
    <DefaultContainer>
      <Text fontSize='3xl' mb='2rem'>
        {title}
      </Text>
      <Slider style={{ margin: "0 1rem" }} {...settings}>
        {inventories.map((item) => (
          <Link
            key={item.attributes.title}
            href={`/item/${item.attributes.slug}`}
          >
            <Flex
              textAlign='center'
              _hover={{
                transform: "scale(1.02)",
                cursor: "pointer",
              }}
              p='10px'
            >
              <Box
                p='1rem'
                w='100%'
                m='0 1px'
                borderRadius='5px'
                boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
              >
                <Image
                  h={{
                    sm: "90px",
                    md: "120px",
                    lg: "150px",
                    base: "150px",
                  }}
                  w='auto'
                  m='0 auto'
                  objectFit='scale-down'
                  src={
                    item.attributes.image.data.attributes.formats.thumbnail.url
                  }
                  alt={item.title}
                />

                <Text
                  whiteSpace='nowrap'
                  fontSize={{
                    sm: "0.8rem",
                    md: "0.9rem",
                    lg: "1rem",
                    base: "0.8rem",
                  }}
                  mt='2rem'
                >
                  {item.attributes.title}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Slider>
    </DefaultContainer>
  );
};

export default Carousel;
