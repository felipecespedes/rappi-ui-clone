import React from 'react';
import { HomeContainer } from './Home.styles';
import Header from '../Header/Header';
import Banking from '../Banking/Banking';
import Market from '../Market/Market';
import { SafeAreaView, StatusBar } from 'react-native';

const Home = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView>
        <HomeContainer>
          <Header navigation={props.navigation} />
          <Banking />
          <Market />
        </HomeContainer>
      </SafeAreaView>
    </>
  );
};

export default Home;
