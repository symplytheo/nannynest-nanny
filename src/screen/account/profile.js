import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Chip, Divider, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';
import ProfileAboutModal from './update_profile/about';
import ProfileCategoriesModal from './update_profile/categories';

const SOCIALS = [
  {
    name: 'Connected Facebook',
    icon: 'check',
    color: '#FFF',
    textColor: Colors.green,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    color: '#FFF',
    textColor: Colors.onPrimaryContainer,
    iconColor: Colors.primary,
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    color: '#0B1129',
    textColor: Colors.onPrimary,
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    color: '#FFF',
    textColor: Colors.onPrimaryContainer,
    iconColor: Colors.secondary,
  },
];

const ProfileOverviewScreen = ({ navigation }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={[styles.profileOverview, styles.mb8]}>
          <Image source={person} style={[styles.dp]} />
          <View style={{ marginHorizontal: 16 + 0 }}>
            <Text variant="bodyLarge" style={styles.bold}>
              Matthew Ola <MCIcon name="star-circle" color={Colors.secondary} size={18} />
            </Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              +234 816 770 2086
            </Text>
            <Text variant="bodyMedium" style={{ color: Colors.grey }}>
              matthewola@gmail.com
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.75}
            style={{ marginLeft: 'auto' + '' }}
            onPress={() => navigation.navigate('update-profile')}>
            <MCIcon name="pencil" color={Colors.primary} size={24} />
          </TouchableOpacity>
        </View>
        <Divider style={[{ backgroundColor: Colors.grey }, styles.mt8, styles.mb8]} />
        <View style={[styles.mt8, styles.mb8]}>
          <View style={[styles.status, styles.mb8]}>
            <Text variant="bodyLarge" style={{ fontWeight: 600 + '' }}>
              About
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text
                variant="bodyMedium"
                style={{ color: Colors.primary, fontWeight: 500 + '' }}
                onPress={() => setShowAbout(true)}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <Text variant="bodyMedium" style={[styles.mb8, { color: Colors.grey }]}>
            This is about Mary Jane not about the designer. The designer is not a nanny. He will do
            a very bad job at that. Don’t hire him to nanny work
          </Text>
        </View>

        <Divider style={[{ backgroundColor: Colors.grey }, styles.mt8, styles.mb8]} />

        <View style={styles.mt8}>
          <View style={[styles.status, styles.mb8]}>
            <Text variant="bodyLarge" style={{ fontWeight: 600 + '' }}>
              Category
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text
                variant="bodyMedium"
                style={{ color: Colors.primary, fontWeight: 500 + '' }}
                onPress={() => setShowCategory(true)}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.chipContainer, styles.mb8]}>
            {['Child', 'Toddler', 'Elderly', 'Disabled'].map(el => (
              <Chip key={el} textStyle={styles.chipText} style={styles.chip}>
                {el}
              </Chip>
            ))}
          </View>
        </View>

        <Divider style={[{ backgroundColor: Colors.grey }, styles.mt8, styles.mb8]} />

        <View style={[styles.section, styles.status]}>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            Languages
          </Text>
          <Text variant="bodyMedium">English, Pidgin, French</Text>
        </View>

        <View style={[styles.section, styles.status]}>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            Pronouns
          </Text>
          <Text variant="bodyMedium">She/Her</Text>
        </View>

        <View style={[styles.section, styles.status]}>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            Nationality
          </Text>
          <Text variant="bodyMedium">Nigerian</Text>
        </View>

        <View style={[styles.section, styles.status]}>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            Experience
          </Text>
          <Text variant="bodyMedium">5 Years</Text>
        </View>

        <View style={[styles.socials, styles.mt8]}>
          <Text variant="bodyLarge" style={[{ fontWeight: 600 + '' }, styles.mb8]}>
            Connected account
          </Text>
          <View style={styles.mt8}>
            {SOCIALS.map(social => (
              <AppButton
                key={social.icon}
                buttonColor={social.color}
                textColor={social.textColor}
                style={styles.socialBtn}
                icon={({ color }) => (
                  <MCIcon name={social.icon} size={24} color={social.iconColor || color} />
                )}>
                {social.name}
              </AppButton>
            ))}
          </View>
        </View>
      </ScrollView>

      {/*  */}
      <ProfileCategoriesModal open={showCategory} onClose={() => setShowCategory(false)} />
      <ProfileAboutModal open={showAbout} onClose={() => setShowAbout(false)} />
    </SafeAreaView>
  );
};

export default ProfileOverviewScreen;
