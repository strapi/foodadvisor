import RestaurantCard from '../../pages/restaurant/RestaurantCard';
import Container from '../../shared/Container';
import Header from '../../shared/Header';

const RelatedRestaurants = ({ header, restaurants }) => {
  return (
    <Container>
      <div className="bg-gray-100 my-40">
        <Header {...header} />
        <div className="w-4/5 mx-auto py-16 ">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-12 pb-12 px-4">
            {restaurants &&
              restaurants.data.map((restaurant, index) => (
                <RestaurantCard {...restaurant.attributes} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

RelatedRestaurants.defaultProps = {};

export default RelatedRestaurants;
