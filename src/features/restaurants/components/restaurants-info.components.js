import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet} from 'react-native';
import { Card  } from 'react-native-paper';

const RestaurantCard = styled(Card)`
   background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
   padding: 20px;
   color: red;
`;


const Title = styled.Text`
 padding: 16px;
 color: red;
`;


const RestaurantInfo = ({restaurant = {} }) => {
    const { name = 'Some Restaurant',
        icon =['https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777'],
        photos= [
            'https://unsplash.com/photos/-YHSwy6uqvk'
        ],
        address="666 Sleepy Hollow",
        isOpenNow = true,
        rating= 4,
        isClosedTemporarily } = restaurant;

        return (
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <Title>{name}</Title>
            </RestaurantCard>
        )

}

export default RestaurantInfo;


