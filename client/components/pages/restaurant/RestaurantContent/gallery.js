import delve from 'dlv';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getStrapiMedia } from '../../../../utils';

const Gallery = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={100}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="md:py-2 py-2 w-1/2"
    >
      {images &&
        images.map((image, index) => (
          <img
            alt={delve(image, 'attributes.alternativeText')}
            className="block object-fill px-1"
            src={getStrapiMedia(delve(image, 'attributes.url'))}
            key={`imageGallery-${index}`}
          />
        ))}
    </Carousel>
  );
};

export default Gallery;
