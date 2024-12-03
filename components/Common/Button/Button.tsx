import React from 'react';
import Colors from '@/constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = () => {
return (
<View>
    <TouchableOpacity style={{ backgroundColor: Colors.Green, paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, width: 250 }}>
        <Text style={{ color: 'white', fontFamily: 'FrauncesBold', fontSize: 25, textAlign: 'center'}}>Create your plan</Text>
    </TouchableOpacity>
</View>
)
}

export default Button

const styles = StyleSheet.create({})