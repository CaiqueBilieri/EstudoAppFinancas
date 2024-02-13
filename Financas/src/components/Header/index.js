import React from 'react'
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons' /* PUXANDO UM ICONE DA BIBLIOTECA*/


/*CONFIGURANDO O STATUS PARA ANDROID E SE NAO FOR ANDROID MUDAR PARA MAIOR*/
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Sujeito Prog</Text>


                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        /*ESPAÇAMENTO DO TOP DE ACORDO COM A VARIAVEL "StatusBarHeight"*/
        paddingTop: StatusBarHeight,
        /*UM DO LADO DO OUTRO*/
        flexDirection: "row",
        /*ESPAÇAMENTO NO COMEÇO, FIM E BAIXO*/
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        /*ALINHADO NO CENTRO*/
        alignItems: 'center',
        /*UM DO LADO DO OUTRO*/
        flexDirection: 'row',
        /*UM EM CADA CANTO DA TELA*/
        justifyContent: 'space-between'
    },
    username:{
        /*FONTE*/
        fontSize: 18,
        /*COR BRANCA*/
        color: '#fff',
        /*DEIXANDO O TEXTO NEGRITO*/
        fontWeight: 'bold'
    }
})