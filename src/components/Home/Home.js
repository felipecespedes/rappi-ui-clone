import React from 'react';
import { HomeContainer } from './Home.styles';
import Header from '../Header/Header';
import Banking from '../Banking/Banking';
import Market from '../Market/Market';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';

const Home = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeContainer>
            <Header navigation={props.navigation} />
            <Banking />
            <Market />
          </HomeContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
