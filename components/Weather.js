import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    zipCode: '-',
    main: '-',
    description: '-',
    temp: 0,
    }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=17513bfab8f72961e0661eb1808376d2`)
                    .then((response) => response.json())
                    .then((json) => {
                        setForecastInfo({
                            zipCode: props.zipCode,
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp,
                        });
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            }
        }, [props.zipCode])

    
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
        bottom: '57%',
        left: 0,
        
    }
})