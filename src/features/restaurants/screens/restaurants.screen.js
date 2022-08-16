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
   padding: 16px;

`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: blue;

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


