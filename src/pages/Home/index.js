import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { RestaurantCard, Modal, Map, ImageCard, Loader, Text, ImageSkeleton as Skeleton } from "../../components";

import { Container, Search, Card, Logo, Title, Carousel, Wrapper, CarouselTitle, ModalTitle, ModalContent } from './style';

const Home = () => {
    const [inputValue, setInputValue] = useState(' ');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [open, setOpen] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    const hasRestaurants = restaurants.length > 0;

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true,
    };

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    const renderCarousel = () => {
        if (hasRestaurants) {
          return (
            <>
              <Title size="large">Na sua Área</Title>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <ImageCard key={restaurant.place_id} restaurant={restaurant} />
                ))}
              </Carousel>
            </>
          );
        }
        return <Loader />;
      };
    
      const renderRestaurants = () => {
        if (hasRestaurants) {
          return restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.place_id}
              restaurant={restaurant}
              onClick={() => {
                setPlaceId(restaurant.place_id);
                setOpen(true);
              }}
            />
          ));
        }
        return null;
      };

    return (
        <Wrapper>       
            <Container>
                <Search>
                 <Logo src={logo} alt="Logo do restaurante" />
                 <TextField
                  outlined
                  label='Pesquisar Restaurantes'
                  trailingIcon={<MaterialIcon role="button" icon="search"/>}
                 >
                 <Input
                  type="text"
                  value={inputValue}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => setInputValue(e.target.value)}
                 />
                 </TextField>
                 {renderCarousel()}
                </Search>
                {renderRestaurants()}
                {restaurants.length > 0 ?  (
                    <>
                        <CarouselTitle>Na sua Área</CarouselTitle>
                        <Carousel {...settings}>
                          {restaurants.map((restaurant) => (
                             <Card 
                                key={restaurant.place_Id} 
                                photo={restaurant.photo ? restaurant.photo[0].getUrl() : restaurante}
                                title={restaurant.name} 
                            />
                        ))}
                    </ Carousel>
                </>
                ) : (
              <Loader />  
                )}
           
               {restaurants.map((restaurant) => (
                <RestaurantCard 
                    onClick={() => handleOpenModal(restaurant.place_id)} 
                    restaurant={restaurant} 
                />
              ))}
            </ Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <Text size="large">{restaurantSelected?.name}</Text>
                        <Text size="medium">{restaurantSelected?.formatted_phone_number}</Text>
                        <Text size="medium">{restaurantSelected?.formatted_address}</Text>
                        <Text size="medium">
                          {restaurantSelected?.opening_hours?.open_now
                            ? 'Aberto agora :)'
                            : 'Fechado neste momento :('}
                        </Text>
                    </>
                ) : (
                  <>
                    <Skeleton width="10px" height="10px" />
                    <Skeleton width="10px" height="10px" />
                    <Skeleton width="10px" height="10px" />
                    <Skeleton width="10px" height="10px" />
                  </>
                )} 
            </Modal>
        </Wrapper>    
    );
};

export default Home;