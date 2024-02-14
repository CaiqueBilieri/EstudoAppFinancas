import React from 'react'
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons' /* PUXANDO UM ICONE DA BIBLIOTECA*/
import {MotiView, MotiText} from 'moti'

/*CONFIGURANDO O STATUS PARA ANDROID E SE NAO FOR ANDROID MUDAR PARA MAIOR*/
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header({ name }){
    return(
        <View style={styles.container}>

            <MotiView
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0,
                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{
                    type:'timing',
                    duration: 800,
                    delay: 300,
                }}
            >
                <MotiText 
                style={styles.username}
                from={{
                    translateX:-300
                }}
                    animate={{
                    translateX: 0
                }}
                transition={{
                    type:'timing',
                    duration: 800,
                    delay: 800,
                }}
                >
                    {name}
                </MotiText>


                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </MotiView>

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
        /*COR DA LETRA*/
        color: '#fff',
        /*DEIXANDO O TEXTO NEGRITO*/
        fontWeight: 'bold'
    },
    buttonUser:{
        /*LARGURA*/
        width: 44,
        /*ALTURA*/
        height: 44,
        /*COR DO BOTAO*/
        backgroundColor: 'rgba(255,255,255,0.5)',
        /*ALINHANDO NA HORIZONTAL*/
        justifyContent: 'center',
        /*ALINHANDO NA VERTICAL*/
        alignItems: 'center',
        /*ARREDONDANDO AS BORDAS PARA UMA ELIPSE PERFEITA*/
        borderRadius: 44/2
    }
})