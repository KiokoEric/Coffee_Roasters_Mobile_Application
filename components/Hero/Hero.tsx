import React from 'react';
import Button from '../Common/Button/Button';
const HeroImage = require('../../assets/images/Hero-Image.jpg');
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Hero = () => {
return (
<View style={{ margin: 'auto', width: '95%' }} >
    <ImageBackground source={HeroImage} style={{ borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 25, overflow: 'hidden', paddingHorizontal: 40, paddingVertical: 80,   }} >
        <Text style={{ color: 'white', fontSize: 50, fontFamily: 'FrauncesBold', textAlign: 'center'}}>Great Coffee made simple.</Text>
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'InstrumentSerif', textAlign: 'center' }}>Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</Text>
        <Button />
    </ImageBackground>
</View>
)
}

export default Hero

const styles = StyleSheet.create({})