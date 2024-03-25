import {hp, wp} from '../../services/diamension';
import React from 'react';
import {InputText, RNButton} from '../../components';
import {colors} from '../../themes';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const handleSubmit = async () => {
    navigation.navigate('Chat');
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Name: 'Ashish Singh',
      CallDuragtion: '09:35 PM',
      Time: '01:00',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      Name: 'Superman',
      CallDuragtion: '09:35 PM',
      Time: '01:00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      Name: 'Golden',
      CallDuragtion: '09:35 PM',
      Time: '01:00',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ab28ba',
      Name: 'Lucky',
      CallDuragtion: '09:35 PM',
      Time: '01:00',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa63',
      Name: 'Lovely',
      CallDuragtion: '09:35 PM',
      Time: '01:00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145579d72',
      Name: 'Golden',
      CallDuragtion: '09:35 PM',
      Time: '01:00',
    },
  ];

  const Item = ({item}) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Text style={styles.name}>{item.Name}</Text>
          <Text style={styles.duration}>{item.CallDuragtion}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.time}>{item.Time}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Recent Call</Text>

      <Image
        source={{
          uri: 'https://www.tech101.in/wp-content/uploads/2019/09/xxtech101-qr.png,Mic.1Ef0vXWtoj.png.pagespeed.ic.Pb478GychK.webp',
        }}
        style={{
          width: '80%',
          borderRadius: 9,
          height: 250,
        }}
      />

      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

      <RNButton
        title={'Chat Message '}
        buttonTextColor={styles.btnText}
        buttonStyle={{
          width: wp(70),
          marginTop: hp(3),
          backgroundColor: colors.purple,
          borderRadius: 9,
        }}
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: hp(2),
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.light_gray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  rightContent: {
    // flex: 0.3,
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 14,
    color: '#777777',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
