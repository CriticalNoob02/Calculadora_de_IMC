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
        backgroundColor:'#FAF3F3',
        fontSize: 28,
        padding: 10,
        fontWeight: "bold",
        shadowColor: "#FF0043",
        shadowOffset: {
	        width: 5,
	        height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10.78,
        elevation: 20,
    },
})

export default Estilo