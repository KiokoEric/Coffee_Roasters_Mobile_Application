import React from 'react';
import Product from '../Common/Product/Product';
import { StyleSheet, Text, View } from 'react-native';
const Danche = require('../../assets/images/Danche.png');
const Planalto = require('../../assets/images/Planalto.png');
const Piccollo = require('../../assets/images/Piccollo.png');
const GranEspresso = require('../../assets/images/Gran-Espresso.png');

const Collection = () => {
return (
<View style={{ marginBottom: 40, marginTop: 40 }} >
    <Text style={{ color: 'black', fontSize: 50, fontFamily: 'FrauncesBold', marginBottom: 50, textAlign: 'center' }} >our collection</Text>
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 25, paddingHorizontal: 20 }}>
        <Product 
            Source={GranEspresso}
            Name='Gran Espresso'
            Description='Light and flavourful blend with cocoa and black pepper for an intense experience'
        />
        <Product 
            Source={Planalto}
            Name='Planalto'
            Description='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
        />
        <Product 
            Source={Piccollo}
            Name='Piccollo'
            Description='Mild and smooth blend featuring notes of toasted almond and dried cherry'
        />
        <Product 
            Source={Danche}
            Name='Danche'
            Description='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
        />
    </View>
</View>
)
}

export default Collection

const styles = StyleSheet.create({})