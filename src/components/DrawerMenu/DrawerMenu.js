import React from 'react';
import {
  DrawerContainer,
  DrawerHeader,
  PersonName,
  DrawerHeaderGroup,
  Greeting,
  Logo,
  QuickMenuContainer,
  QuickMenu,
  QuickMenuIcon,
  QuickMenuDescription,
  QuickMenuContent,
  Ad,
  MenuContainer,
  MenuTitleContainer,
  MenuTitle,
  MenuItem,
  MenuItemDescription,
  MenuItemIcon,
  MenuItemAction,
  AppVersion,
} from './DrawerMenu.styles';
import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QUICK_MENUS = [
  {
    id: '1',
    description: 'Datos de Perfil',
  },
  {
    id: '2',
    description: 'Centro de ayuda',
  },
  {
    id: '3',
    description: 'Historial de pedidos',
  },
  {
    id: '4',
    description: 'Métodos de pago',
  },
];

const MENUS = [
  {
    id: '1',
    title: 'Promos y Créditos',
    isClickable: true,
    items: [
      {
        id: '1',
        description: 'RapiCréditos',
        action: <Text style={{ fontSize: 18 }}>$0</Text>,
      },
      {
        id: '2',
        description: 'Cupones',
        action: null,
      },
    ],
  },
  {
    id: '2',
    title: 'Mi Cuenta',
    isClickable: false,
    items: [
      {
        id: '1',
        description: 'RappiPay',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '2',
        description: 'RappiPrime',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '3',
        description: 'Direcciones',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '4',
        description: 'Centro de notificaciones',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '5',
        description: 'Membresias y puntos',
        action: <Icon name="chevron-right" size={20} />,
      },
    ],
  },
  {
    id: '3',
    title: 'Información',
    isClickable: false,
    items: [
      {
        id: '1',
        description: 'Aplica a tarjeta Rappi',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '2',
        description: 'Quiero ser aliado Rappi',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '3',
        description: 'Quiero ser Rappi',
        action: <Icon name="chevron-right" size={20} />,
      },
      {
        id: '4',
        description: 'Términos y condiciones',
        action: <Icon name="chevron-right" size={20} />,
      },
    ],
  },
  {
    id: '4',
    isClickable: false,
    items: [
      {
        id: '1',
        description: 'Cerrar sesión',
        action: null,
      },
    ],
  },
];

class DrawerMenu extends React.Component {

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerContainer>
          { this.renderHeader() }
          <QuickMenuContainer>
            <QuickMenuContent>
              { QUICK_MENUS.map(menu => this.renderQuickMenuItem(menu)) }
            </QuickMenuContent>
          </QuickMenuContainer>
          { this.renderAds() }
          { this.renderMenus() }
          { this.renderAppVersion() }
        </DrawerContainer>
      </ScrollView>
    );
  }

  renderHeader() {
    return (
      <DrawerHeader>
        <DrawerHeaderGroup>
          <Greeting>Hola</Greeting>
          <PersonName>Felipe</PersonName>
        </DrawerHeaderGroup>
        <Logo />
      </DrawerHeader>
    );
  }

  renderQuickMenuItem(menu) {
    return (
      <QuickMenu key={menu.id}>
        <QuickMenuIcon />
        <QuickMenuDescription>
          { menu.description }
        </QuickMenuDescription>
      </QuickMenu>
    );
  }

  renderAds() {
    return (
      <>
        <Ad style={{ backgroundColor: '#A8B6F3', height: 100 }} />
        <Ad style={{ backgroundColor: '#FF2F49', height: 200 }} />
      </>
    );
  }

  renderMenus() {
    return (
      MENUS.map(menu => (
        <MenuContainer key={menu.id}>
          { this.renderMenuTitle(menu.title) }
          { menu.items.map(item => this.renderMenuItem(item)) }
        </MenuContainer>
      ))
    );
  }

  renderMenuTitle(title) {
    if (title) {
      return (
        <MenuTitleContainer>
          <MenuTitle>{title}</MenuTitle>
        </MenuTitleContainer>
      );
    }
  }

  renderMenuItem(item) {
    return (
      <MenuItem key={item.id}>
        <MenuItemIcon />
        <MenuItemDescription>
          {item.description}
        </MenuItemDescription>
        <MenuItemAction>
          { item.action }
        </MenuItemAction>
      </MenuItem>
    );
  }

  renderAppVersion() {
    return (
      <AppVersion>
        Versión 0.0.1
      </AppVersion>
    );
  }
}

export default DrawerMenu;
