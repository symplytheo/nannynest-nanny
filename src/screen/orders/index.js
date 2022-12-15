import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { TabBar, TabView } from 'react-native-tab-view';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';
import OrderList from './_orderlist';

const DATA = [
  { id: 'bd7acb1a', name: 'Matthew Ola' },
  { id: 'bd7acb2a', name: 'Promise Ozor' },
  { id: 'bd7acb3a', name: 'Theo Ojochegbe' },
  { id: 'bd7acb4a', name: 'Sombody Else' },
];

const OrdersScreen = ({ navigation, route: { params } }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'new', title: 'New' },
    { key: 'upcoming', title: 'Upcoming' },
  ]);

  useEffect(() => {
    if (params?.tabIndex) {
      setIndex(params?.tabIndex);
    } else {
      setIndex(0);
    }
  }, [params?.tabIndex]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'new':
        return (
          <OrderList
            data={DATA}
            route={route}
            jumpTo={jumpTo}
            navigation={navigation}
          />
        );
      case 'upcoming':
        return (
          <OrderList
            data={DATA}
            showDate={true}
            navigation={navigation}
            route={route}
            jumpTo={jumpTo}
          />
        );
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.primary }}
      style={styles.tabBar}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      inactiveColor={Colors.black}
      activeColor={Colors.primary}
      renderLabel={({ route, color }) => (
        <View style={styles.row}>
          <Text variant="bodyMedium" style={[{ color }, styles.medium]}>
            {route.title}
          </Text>
          {route.key === 'new' && (
            <View style={styles.badge}>
              <Text variant="bodySmall" style={{ color: Colors.white }}>
                3
              </Text>
            </View>
          )}
        </View>
      )}
      pressColor={'transparent'}
    />
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.header, styles.container, { paddingBottom: 0 + 0 }]}>
        <Text variant="bodyLarge" style={styles.medium}>
          My Orders
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.row}
          onPress={() => navigation.navigate('history')}>
          <Text
            variant="bodyMedium"
            style={[{ color: Colors.primary }, styles.medium]}>
            History
          </Text>
          <MCIcon
            name="format-list-bulleted-square"
            size={20}
            color={Colors.primary}
            style={{ marginLeft: 3 + 1 }}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapper, styles.px16]}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
