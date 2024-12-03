import React from 'react';
import Colors from '@/constants/Colors';
import Benefit from '../Common/Benefit/Benefit';
import { StyleSheet, Text, View } from 'react-native';
const Gift = require('../../assets/images/Gift-Icon.png');
const Truck = require('../../assets/images/Truck-Icon.png');
const Coffee = require('../../assets/images/Coffee-Bean.png');

const About = () => {
return (
<View>
    <View style={{ backgroundColor: Colors.Dark, borderRadius: 20,  marginBottom: 40, paddingHorizontal: 5, paddingVertical: 30, margin: 'auto', width: '95%' }} >
        <Text style={{ color: 'white', fontSize: 40, fontFamily: 'FrauncesBold', marginBottom: 20, textAlign: 'center' }} >Why choose us?</Text>
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'InstrumentSerif', marginBottom: 50, paddingHorizontal: 30, textAlign: 'center' }}>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</Text>
    </View>
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 25, marginBottom: 40, paddingHorizontal: 20 }}>
        <Benefit
            Source={Coffee}
            Title='Best Quality'
            Description="Discover an endless variety of the world's best artisan coffee from each of our roasters."
        />
        <Benefit
            Source={Gift}
            Title='Exclusive Benefits'
            Description="Special offers and swag when you subscribe, inclusing 30% off your first shipment."
        />
        <Benefit
            Source={Truck}
            Title='Free Shipping'
            Description="We cover the cost and coffee is delivered fast.Peak freshness: guaranteed."
        />
    </View>
</View>
)
}

export default About

const styles = StyleSheet.create({})