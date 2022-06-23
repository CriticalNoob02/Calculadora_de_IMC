import React, {useState} from "react"
import { Text, View, TextInput, TouchableOpacity, Vibration } from 'react-native';
import ResultIMC from "./resultIMC/index";
import Estilo from "../Styles/Form"

export default function Form (){
    
    const [height, setHeinght] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencher os valores de peso e altura corretamente")
    const [IMC, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator (){
        return setIMC ( ( weight/(height*height) ).toFixed(2) )
    }

    function verificationIMC (){
        if(IMC == null){
            Vibration.vibrate()
            setErrorMessage("Campo Obrigatório*")
        }
    }

    function validationIMC(){
        if(height != null && weight != null){
            imcCalculator()
            setHeinght(null)
            setWeight(null)
            setMessageIMC("Seu IMC é:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
            verificationIMC()
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencher os valores de peso e altura corretamente")
        
    }

    return(
    <View style={Estilo.formContext}>
        <View style={Estilo.form}>
            <Text style={Estilo.formLabel}> Altura </Text>
            <Text style={Estilo.errorMessage}>{errorMessage}</Text>
            <TextInput
                onChangeText={setHeinght}
                value={height}
                placeholder="EX. 1.80"
                keyboardType="numeric"
                style={Estilo.input}
            />
            <Text style={Estilo.formLabel}> Peso </Text>
            <Text style={Estilo.errorMessage}>{errorMessage}</Text>
            <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="EX. 81.098"
                keyboardType="numeric"
                style={Estilo.input}
            />
            <TouchableOpacity onPress={() => validationIMC()}
                              style={Estilo.button}>
               <Text style={Estilo.textButton}>{textButton}</Text>
            </TouchableOpacity>
        </View>
            <ResultIMC 
                messageResultIMC={messageIMC}
                resultIMC={IMC}
            />
    </View>
    )
}