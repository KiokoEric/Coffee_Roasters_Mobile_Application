import React from 'react';
import Colors from '@/constants/Colors';
import { View, Text, Image } from 'react-native';
const Twitter = require('../../assets/images/icon-twitter.png');
const Facebook = require('../../assets/images/icon-facebook.png');
const Instagram = require('../../assets/images/icon-instagram.png');

const Footer = () => {
return (
<View style={{ backgroundColor: Colors.Dark, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30, margin: 'auto', marginBottom: 50, paddingHorizontal: 20, paddingVertical: 40,  width: '90%' }} >
    <Text style={{ color: Colors.Grey, fontFamily: 'InstrumentSerif', letterSpacing: 2, textAlign: 'center' ,textTransform: 'uppercase' }} >Home</Text>
    <Text style={{ color: Colors.Grey, fontFamily: 'InstrumentSerif', letterSpacing: 2, textAlign: 'center' ,textTransform: 'uppercase' }} >About Us</Text>
    <Text style={{ color: Colors.Grey, fontFamily: 'InstrumentSerif', letterSpacing: 2, textAlign: 'center' ,textTransform: 'uppercase' }}>Create your plan</Text>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 40, marginTop: 30 }} >
        <Image source={Facebook} />
        <Image source={Twitter} />
        <Image source={Instagram} />
    </View>
</View>
)
}

export default Footer