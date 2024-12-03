import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Instruction from '../Common/Instruction/Instruction';
import Button from '../Common/Button/Button';

const Instructions = () => {
return (
<View>
<Text style={{ color: 'black', fontSize: 50, fontFamily: 'FrauncesBold', marginBottom: 50, textAlign: 'center' }} >How it works</Text>
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 25, marginBottom: 40, paddingHorizontal: 20 }}>
        <Instruction 
            Number='01'
            Title='Pick your coffee'
            Description='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        />
        <Instruction 
            Number='02'
            Title='Choose the frequency'
            Description='Customise your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        />
        <Instruction 
            Number='03'
            Title='Receive and enjoy!'
            Description='We ship our package within 48 hours, freshly roasted. Sit back and enjoy award-winning world class coffees curated to provide a distinct tasting experience.'
        />
        <Button />
    </View>
</View>
)
}

export default Instructions

const styles = StyleSheet.create({})