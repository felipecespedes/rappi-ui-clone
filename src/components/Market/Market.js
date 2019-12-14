import React from 'react';
import { Dimensions } from 'react-native';
import {
  MarketContainer,
  MainProductContainer,
  MainProductImage,
  MainProductDescription,
  MainProducts,
  MainProductContent,
  ScrollableSection,
  SubProductDescription,
  SubProductContainer,
  SubProductImage,
  SubProductContent,
} from './Market.styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const PRODUCTS = [
  {
    id: '1',
    description: 'Super Mercados',
    bgColor: '#b0dd5a',
  },
  {
    id: '2',
    description: 'Restaurantes',
    bgColor: '#ff5c49',
  },
];

const PAGES = [
  [
    {
      id: '1',
      description: 'Lo que sea',
      bgColor: '#b0dd5a',
    },
    {
      id: '2',
      description: 'Grin',
      bgColor: '#ff5c49',
    },
    {
      id: '3',
      description: 'Farmacia',
      bgColor: '#b0dd5a',
    },
    {
      id: '4',
      description: 'RappiFavor',
      bgColor: '#ff5c49',
    },
    {
      id: '5',
      description: 'Cajeto ATM',
      bgColor: '#ff5c49',
    },
    {
      id: '6',
      description: 'Express',
      bgColor: '#b0dd5a',
    },
    {
      id: '7',
      description: 'Licores',
      bgColor: '#ff5c49',
    },
    {
      id: '8',
      description: 'Rappi Box',
      bgColor: '#b0dd5a',
    },
  ],
  [
    {
      id: '1',
      description: 'SOAT',
      bgColor: '#b0dd5a',
    },
    {
      id: '2',
      description: 'Tecnología',
      bgColor: '#ff5c49',
    },
    {
      id: '3',
      description: 'Moda',
      bgColor: '#b0dd5a',
    },
    {
      id: '4',
      description: 'Belleza',
      bgColor: '#ff5c49',
    },
    {
      id: '5',
      description: 'Hogar',
      bgColor: '#ff5c49',
    },
    {
      id: '6',
      description: 'Floristería',
      bgColor: '#b0dd5a',
    },
    {
      id: '7',
      description: 'Regalos',
      bgColor: '#ff5c49',
    },
    {
      id: '8',
      description: 'Servicios',
      bgColor: '#b0dd5a',
    },
  ],
];

const { width } = Dimensions.get('window');

class Market extends React.Component {
  state = {
    activeSlideIndex: 0,
  };

  render() {
    const { activeSlideIndex } = this.state;

    return (
      <MarketContainer>
        <MainProducts>{PRODUCTS.map(p => this.renderProduct(p))}</MainProducts>
        <Carousel
          data={PAGES}
          renderItem={this.renderPage}
          sliderWidth={width - 20}
          itemWidth={width - 20}
          onSnapToItem={index => this.setState({ activeSlideIndex: index })}
        />
        <Pagination
          dotsLength={PAGES.length}
          activeDotIndex={activeSlideIndex}
          inactiveDotOpacity={0.4}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 15,
          }}
        />
      </MarketContainer>
    );
  }

  renderProduct({ id, description, bgColor }) {
    return (
      <MainProductContainer key={id}>
        <MainProductContent style={{ backgroundColor: bgColor }}>
          <MainProductImage />
          <MainProductDescription>{description}</MainProductDescription>
        </MainProductContent>
      </MainProductContainer>
    );
  }

  renderPage = ({ index }) => {
    return (
      <ScrollableSection style={{ width: width - 20 }} key={index}>
        {PAGES[index].map((item, i) => (
          <SubProductContainer key={i}>
            <SubProductContent>
              <SubProductImage style={{ backgroundColor: item.bgColor }} />
              <SubProductDescription>{item.description}</SubProductDescription>
            </SubProductContent>
          </SubProductContainer>
        ))}
      </ScrollableSection>
    );
  };
}

export default Market;
