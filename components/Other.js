import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

export default function Other(props){
    return(
        <View>
        <ImageBackground source={require('../bg.jpeg')} style ={styles.backdrop}>
            <View style = {styles.backfont}>
                
                    <Text style = {styles.fonts}>Zip Code is {props.zipCode}.</Text>
                    {/* <Forecast {...forecastInfo}/>  */}
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