import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet} from 'react-native';
import { Card  } from 'react-native-paper';

const RestaurantCard = styled(Card)`
   background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
   padding: ${(props) => props.theme.space[3]};
   color: ${(props) =>props.theme.colors.bg.primary};
`;


const Title = styled.Text`
 padding: ${(props)=> props.theme.space[3]};
 color: ${(props) => props.theme.colors.ui.primary};
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


