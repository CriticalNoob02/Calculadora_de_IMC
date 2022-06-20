import React, {useState} from "react"
import { Text, View, TextInput, Button } from 'react-native';
import ResultIMC from "./resultIMC/index";

export default function Form (){
    
    const [height, setHeinght] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencher os valores de peso e altura corretamente")
    const [IMC, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator (){
        return setIMC ( ( weight/(height*height) ).toFixed(2) )
    }

    function validationIMC(){
        if(height != null && weight != null){
            imcCalculator()
            setHeinght(null)
            setWeight(null)
            setMessageIMC("Seu IMC é:")
            setTextButton("Calcular Novamente")
            return
        }
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencher os valores de peso e altura corretamente")
        
    }

    return(
    <View>
        <View>
            <Text> Altura </Text>
            <TextInput
                onChangeText={setHeinght}
                value={height}
                placeholder="EX. 1.80"
                keyboardType="numeric"
            />
            <Text> Peso </Text>
            <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="EX. 81.098"
                keyboardType="numeric"
            />
            <Button
                onPress={() => validationIMC()}
                title="Calucular IMC"/>
        </View>
            <ResultIMC 
                messageResultIMC={messageIMC}
                resultIMC={IMC}
            />
    </View>
    )
}