import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurants-info-card.components';
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const isAndroid = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
   padding: ${(props) => props.theme.space[3]};


`;

export default function RestaurantScreen() {
  return (
    <>
      
      <SafeArea>
        <SearchContainer>
      <Searchbar />
      </SearchContainer>
      <FlatList 
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },

        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
           <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}

      />

    </SafeArea>
      
    <ExpoStatusBar style="auto" />
    </>
    );
}


