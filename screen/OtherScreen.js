import React from 'react'
import { View } from 'react-native'
import Other from '../components/Other'

export default function OtherScreen ({route}){
    return(
        <View>
            <Other zipCode={route.params.zipCode}/>
        </View>
    )
}