import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../styles/colors';
import DashboardScreen from '../screen/dashboard';
import OrdersScreen from '../screen/orders';
import AccountScreen from '../screen/account';

const Tab = createMaterialBottomTabNavigator();

const SCREENS = [
  { name: 'home', icon: 'home', component: DashboardScreen },
  { name: 'orders', icon: 'ticket-confirmation', component: OrdersScreen },
  { name: 'account', icon: 'account', component: AccountScreen },
];

const TabNavigation = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor={Colors.primary}
      inactiveColor={Colors.grey}>
      {SCREENS.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ color }) => (
              <MCIcon name={screen.icon} color={color} size={26} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
