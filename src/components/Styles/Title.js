import { StyleSheet} from 'react-native';



const Estilo = StyleSheet.create({
    boxTitle:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding : 10,
    },
    textTitle:{
        width: "100%",
        textAlign: "center",
        borderRadius: 50,
        color: "#FF0043",
        fontSize: 28,
        padding: 10,
        fontWeight: "bold",
        shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,
        elevation: 25,
    },
})

export default Estilo