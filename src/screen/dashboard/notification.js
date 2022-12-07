import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Menu, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const NotificationScreen = ({ navigation }) => {
  const [visible, setVisible] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          visible={visible}
          anchorPosition="bottom"
          onDismiss={() => setVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setVisible(true)}>
              <MCIcon name="dots-vertical" size={24} color={Colors.black} />
            </TouchableOpacity>
          }>
          <Menu.Item
            onPress={() => console.log('All as read')}
            title="Mark all as read"
          />
        </Menu>
      ),
    });
  }, [navigation, visible]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {[...Array(8)].map((_, i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            style={[styles.infoItem, i < 7 && { borderBottomWidth: 1 + 0 }]}>
            <MCIcon
              name="email"
              size={24}
              color={i < 3 ? Colors.primary : Colors.grey}
            />
            <View style={{ marginLeft: 15 + 1 }}>
              <Text variant="bodyMedium" style={{ fontWeight: 500 + '' }}>
                Order Cancel
              </Text>
              <Text variant="bodyMedium">An order has been cancelled</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
