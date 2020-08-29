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

    const tempsss = ({place, code}) => (
            <View style={styles.backg}>
                <View style={styles.zipItem}>
                    <Text style={styles.fonts}>{place}</Text>
                    <Text style={styles.fonts}>{code}</Text>
                </View>
            </View>
        )

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=17513bfab8f72961e0661eb1808376d2`)
                    .then((response) => response.json())
                    .then((json) => {
                            temps: json.main.temp,
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

    if (forecastInfo.temp <= 27)
    return(
    <View>
        <ImageBackground source={require('../bg.jpeg')} style ={styles.backdrop}>
            <View style = {styles.backblue}>
                
                    <Text style = {styles.fonts}>Zip Code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo}/> 
            </View>  
        </ImageBackground>
    </View>    
    );
    else if(forecastInfo.temp >= 33)
    return(
        <View>
            <ImageBackground source={require('../bg.jpeg')} style ={styles.backdrop}>
                <View style = {styles.backred}>
                    
                        <Text style = {styles.fonts}>Zip Code is {props.zipCode}.</Text>
                        <Forecast {...forecastInfo}/> 
                </View>  
            </ImageBackground>
        </View>    
    );
    else 
    return(
        <View>
            <ImageBackground source={require('../bg.jpeg')} style ={styles.backdrop}>
                <View style = {styles.backorange}>
                    
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
    backblue:{
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
        
    },
    backorange:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: 'orange',
        position: 'absolute',
        opacity: 0.7,
        top: 0,
        right: 0,
        bottom: '57%',
        left: 0,
        
    },
    backred:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: 'red',
        position: 'absolute',
        opacity: 0.7,
        top: 0,
        right: 0,
        bottom: '57%',
        left: 0,
        
    },

    
})