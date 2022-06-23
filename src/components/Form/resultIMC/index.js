import React from "react"
import { Text, View } from 'react-native';
import Estilo from "../../Styles/Result"

export default function ResultIMC (props){
    
    return(
    <View style={Estilo.result}>
        <Text  style={Estilo.text}>{props.messageResultIMC}</Text>
        <Text style={Estilo.number}>{props.resultIMC}</Text>
    </View>
    )
}