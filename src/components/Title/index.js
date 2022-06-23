import React from "react"
import { Text, View } from 'react-native';
import Estilo from "../Styles/Title"

export default function Title (){
    
    return(
    <View style={Estilo.boxTitle}>
        <Text style={Estilo.textTitle}>
            ONEBITHEALT
        </Text>
    </View>
    )
}