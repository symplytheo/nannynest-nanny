import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import { Colors } from '../../styles/colors';
import styles from './styles';

const Item = ({ item, showDate, navigation }) => (
  <TouchableOpacity
    style={styles.orderCard}
    activeOpacity={0.8}
    onPress={() => navigation.navigate(showDate ? 'cancel' : 'start-session')}>
    <Image source={person} style={styles.orderCardImage} />
    <View style={{ flex: 1 + 0 }}>
      <Text
        variant="bodyMedium"
        style={[styles.medium, { marginBottom: 4 + 0 }]}>
        {item.name}
      </Text>
      <View style={[styles.row, { alignItems: 'center' + '' }]}>
        <MCIcon name="map-marker" size={14} color={Colors.primary} />
        <Text variant="bodySmall" style={{ color: Colors.grey }}>
          {' '}
          5km away
        </Text>

        {showDate && (
          <>
            <MCIcon
              name="calendar-month-outline"
              color={Colors.primary}
              size={14}
              style={{ marginLeft: 4 + 4 }}
            />
            <Text variant="bodySmall" style={{ color: Colors.grey }}>
              {' '}
              12/03/22
            </Text>
          </>
        )}
      </View>
    </View>
    <MCIcon name="chevron-right" color={Colors.black} size={20} />
  </TouchableOpacity>
);

const OrderList = ({ data, showDate, navigation }) => {
  // const [selectedId, setSelectedId] = useState(null);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item item={item} showDate={showDate} navigation={navigation} />
      )}
      keyExtractor={item => item.id}
      // extraData={selectedId}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OrderList;
