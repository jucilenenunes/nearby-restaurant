import React, { useState} from 'react';
import ReactStars from "react-rating-stars-component";


import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './style';
import Text from '../Text';
import ImageSkeleton from '../ImageSkeleton';

const RestaurantCard = (restaurant, onClick) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Text size="large">{restaurant.name}</Text>
                <Title>{ restaurant.name }</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
                <Address>{ restaurant.vicinity || restaurant.formatted_address }</Address>
            </RestaurantInfo>
            <RestaurantPhoto 
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photo[0].getUrl() : restaurante} 
                onLoad={()=> setImageLoaded(true)}
                alt="Foto do Restaurante" 
            />
            {!imageLoaded && <ImageSkeleton width="100px" height="100px" />}
        </Restaurant>
    );    
};

export default RestaurantCard;


