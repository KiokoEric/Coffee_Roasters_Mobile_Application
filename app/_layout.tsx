import * as Font from 'expo-font';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import React, { useState, useEffect } from 'react';
import Collection from '@/components/Collection/Collection';
import Instructions from '@/components/Instructions/Instructions';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Footer from '@/components/Footer/Footer';

const _layout = () => {

  const [fontsLoaded, setFontsLoaded] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Fraunces": require('../assets/fonts/Fraunces_144pt-Regular.ttf'),
      "FrauncesBold": require('../assets/fonts/Fraunces_144pt-Bold.ttf'),
      "InstrumentSerif": require('../assets/fonts/InstrumentSerif-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>  
        <ScrollView>
          <Header />
          <Hero />
          <Collection />
          <About />
          <Instructions />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default _layout

const styles = StyleSheet.create({
})