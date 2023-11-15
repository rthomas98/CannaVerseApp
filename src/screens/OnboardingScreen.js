import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../constants/colors';

const OnboardingScreen = ({ onFinished }) => {
  const handleFinish = async () => {
    await AsyncStorage.setItem('onboardingComplete', 'true');
    onFinished();
  };

  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide}>
        <Image
            source={require("../imgs/splash-1.png")}
            style={{ width: 300, height: 300 }}
        />
        <Text style={styles.title}>Hi!</Text>
        <Text style={styles.text}>My name is Stoney Bear. I am Cannaverse’s “highered” help. I am here to guide you through our awesome app. Get ready to find your new home! </Text>
        <Button style={styles.link} title="Skip" onPress={handleFinish} />
      </View>
      <View style={styles.slide}>
      <Image
            source={require("../imgs/splash-2.png")}
        />
        <Text style={styles.title}>Budmates</Text>
        <Text style={styles.text}>Meet 420 Friendly Roommates and Friends through our awesome user created groups!</Text>
        <Button title="Skip" onPress={handleFinish} />
      </View>
      <View style={styles.slide}>
         <Image
            source={require("../imgs/splash-3.png")}
        />
        <Text style={styles.title}>Verified!</Text>
        <Text style={styles.text}>Find Apartments, Roommates & Sublets in our 420 Friendly verified community!</Text>
        <Button title="Get Started" onPress={handleFinish} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    color: Colors.secondary,
    fontSize: 77,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
    text: {
        color: Colors.gray,
        fontSize: 20,
        textAlign: 'center',
    },
    link: {
        color: Colors.primary,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default OnboardingScreen;