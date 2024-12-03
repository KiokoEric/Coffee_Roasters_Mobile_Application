import React from 'react';
import Colors from '@/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';

interface BenefitProps {
    Source: any,
    Title: string,
    Description: string
}

const Benefit: React.FC<BenefitProps>  = ({ Source, Title, Description }) => {
return (
<View style={{ backgroundColor: Colors.Green, borderRadius: 20,  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 25, margin: 'auto', paddingHorizontal: 20, paddingVertical: 25, width: 380 }}>
    <Image source={Source} style={{ height: 200, width: 200 }} />
    <Text style={{ color: 'white', fontSize: 40, fontFamily: 'FrauncesBold', textAlign: 'center'}}>{ Title }</Text>
    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'InstrumentSerif', textAlign: 'center' }}>{ Description }</Text>
</View>
)
}

export default Benefit

const styles = StyleSheet.create({})