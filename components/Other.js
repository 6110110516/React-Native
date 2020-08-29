import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import ForOther from './ForOther';

export default function Other(props){
    const [forOtherInfo, setForOtherInfo] = useState({
        ziCode: '-',
        pressure: 0,
        humidity: 0,
        wind: 0,
        }) 
    
        useEffect(() => {
            console.log(`fetching data(other) with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=17513bfab8f72961e0661eb1808376d2`)
                        .then((response) => response.json())
                        .then((json) => {
                            setForOtherInfo({
                                ziCode: props.zipCode,
                                pressure: json.main.pressure,
                                humidity: json.main.humidity,
                                wind: json.wind.speed,
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
                    <Text> {props.pressure}</Text>
                    <ForOther {...forOtherInfo}/>
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