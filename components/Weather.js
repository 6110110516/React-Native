import React, { useState } from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
    }) 
    return(
    <View>
        <ImageBackground source={require('../bg.jpeg')} style ={styles.backdrop}>
            <View style = {styles.backfont}>
                
                    <Text style = {styles.fonts}>Zip Code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo}/>
                    </View>
        </ImageBackground>
        </View>    
    );
}
const styles = StyleSheet.create({
    backdrop:{
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        
        // alignItems: "center",
        width: '100%',
        height: '100%'
    },
    fonts:{ 
        fontSize: 30,
        top: 10,
        bottom: 70
    },
    backfont:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: 'skyblue',
        position: 'absolute',
        opacity: 0.7,
        top: 0,
        right: 0,
        bottom: '65%',
        left: 0,
        
    }
})