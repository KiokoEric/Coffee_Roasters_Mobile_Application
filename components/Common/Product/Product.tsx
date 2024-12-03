import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ProductProps {
    Source: any,
    Name: string,
    Description: string
}

const Product: React.FC<ProductProps>  = ({ Source, Name, Description }) => {
return (
<View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
    <Image source={Source} />
    <Text style={{ color: 'black', fontSize: 30, fontFamily: 'FrauncesBold', textAlign: 'center'}}>{ Name }</Text>
    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'InstrumentSerif', textAlign: 'center' }}>{ Description }</Text>
</View>
)
}

export default Product

const styles = StyleSheet.create({})