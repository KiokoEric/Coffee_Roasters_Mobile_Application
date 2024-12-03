import React from 'react';
import Colors from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

interface InstructionProps {
    Number: string,
    Title: string,
    Description: string
}

const Instruction: React.FC<InstructionProps> = ({ Number, Title, Description }) => {
return (
<View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 25, paddingHorizontal: 20, paddingVertical: 25 }}>
    <Text style={{ color: Colors.Peach, fontSize: 60, fontFamily: 'FrauncesBold', textAlign: 'center'}}>{ Number }</Text>
    <Text style={{ color: 'black', fontSize: 32, fontFamily: 'FrauncesBold', textAlign: 'center'}}>{ Title }</Text>
    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'InstrumentSerif', textAlign: 'center' }}>{ Description }</Text>
</View>
)
}

export default Instruction

const styles = StyleSheet.create({})