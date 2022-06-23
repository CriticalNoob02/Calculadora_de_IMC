import { StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Estilo = StyleSheet.create({
    boxTitle:{
        alignItems: "center",
        justifyContent: "center",
        padding : 10,
    },
    textTitle:{
        color: "#FF0043",
        fontSize: 24,
        fontWeight: "bold",
    },
    textTitle2:{
        fontSize: 24,
        fontWeight: "bold",
        transform: "rotatex(180deg)",
    },
})

export default Estilo