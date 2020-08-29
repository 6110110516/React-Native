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
    <Text style = {styles.fonts}>{props.main}</Text>
    <Text style = {styles.fonts}>{props.description}</Text>
    <View>
    <Text style = {styles.fonts}>{props.temp} °C</Text>
    
    </View>
    </View>
    );
   }
   const styles = StyleSheet.create({
    
    fonts:{ 
        fontSize: 27,
        height: 50,    
    },
    
})

