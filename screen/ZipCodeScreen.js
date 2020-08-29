import React  from 'react';
import { Text, View, FlatList, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight style={{marginTop: 5}} onPress={() =>{
navigation.navigate('Weather',{zipCode: code})

    }}>
        <View style={styles.backg}>
            <View style={styles.zipItem}>
                <Text style={styles.fonts}>{place}</Text>
                <Text style={styles.fonts}>{code}</Text>
            </View>
        </View>
    </TouchableHighlight>
    )

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
    <View >
        <ImageBackground source={require('../bg.jpeg')} style ={styles.backdrop}>
            <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
            <StatusBar style="auto" />
            </View>
        </ImageBackground>
    </View>
    );
   
}
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
        
        
    },
    backg: {
        backgroundColor: 'powderblue',
        opacity: 0.7,
        width: '100%'
        
    },
    backdrop:{
        width: '100%',
        height: '100%'
    },
    fonts:{ 
        fontSize: 37,
        
   
    },
})