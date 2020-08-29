import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ForOther from './ForOther';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Forecast(props) {
    const navigation = useNavigation()
    
    return (
    <View style= {{
        top: 37
    }}>
    <Text style = {styles.fonts}>{props.main}</Text>
    <Text style = {styles.fonts}>{props.description}</Text>
    <View>
    <Text style = {styles.fonts}>{props.temp} °C</Text>

    {/* <Text>°C</Text> */}
    <TouchableHighlight style = {styles.backfont} onPress={() =>{
        navigation.navigate('Other',{zipCode: props.zipCode})

    }}>
        <Text style = {styles.fonts}>Other</Text>
    </TouchableHighlight>
    </View>
    </View>
    );
   }
   const styles = StyleSheet.create({
    fonts:{ 
        fontSize: 27,
        height: 50,    
    },
    backfont:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'yellow',
        opacity: 0.7,
        
    }
    
})

