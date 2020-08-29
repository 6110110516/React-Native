import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function ForOther(props) {
    const navigation = useNavigation()

    return (
    <View style= {{
        top: 37
    }}>
    <Text style = {styles.fonts}>Pressure :{props.pressure}</Text>
    <Text style = {styles.fonts}>Humidity :{props.humidity}</Text>
    <Text style = {styles.fonts}>Wind Speed :{props.wind}</Text>
    
    </View>
    );
   }
   const styles = StyleSheet.create({
    
    fonts:{ 
        fontSize: 27,
        height: 50,    
    },
    
})

