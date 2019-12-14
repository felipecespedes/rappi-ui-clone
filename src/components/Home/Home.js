import React from 'react';
import { HomeContainer } from './Home.styles';
import Header from '../Header/Header';
import Banking from '../Banking/Banking';
import Market from '../Market/Market';
import { SafeAreaView, StatusBar } from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeContainer>
          <Header />
          <Banking />
          <Market />
        </HomeContainer>
      </SafeAreaView>
    </>
  );
};

export default Home;
