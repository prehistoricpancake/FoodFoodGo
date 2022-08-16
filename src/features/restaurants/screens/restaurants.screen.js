import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurants-info.components';
import styled from "styled-components/native";


const isAndroid = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
   padding: ${(props) => props.theme.space[3]};


`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};

`;

export default function RestaurantScreen() {
  return (
    <>
      
      <SafeArea>
        <SearchContainer>
      <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>

    </SafeArea>
      
    <ExpoStatusBar style="auto" />
    </>
    );
}


