import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {MotiView} from 'moti'


export default function Balance({saldo, gastos}){
    return (
        <MotiView 
        style={styles.container}
        from={{
            rotateX: '-100deg',
            opacity: 0,
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1
        }}
        transition={{
            type: 'timing',
            delay: 300,
            duration: 900
        }}
        >

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>
                        {saldo}
                    </Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>
                        {gastos}
                    </Text>
                </View>
            </View>


        </MotiView>
    );
}



const styles = StyleSheet.create({
    container:{
        /*COR DE TUDO*/
        backgroundColor: '#fff',
        /*DEIXANDO UM DO LADO DO OUTRO*/
        flexDirection: 'row',
        /*DEIXANDO UM EM CADA CANTO*/
        justifyContent: 'space-between',
        /*ESPAÇAMENTO DA ESCRITA DA DIREITA PARA ESQUERDA*/
        paddingStart:18,
        /*ESPAÇAMENTO DA ESCRITA DA ESQUERDA PARA DIREITA*/
        paddingEnd: 18,
        /*MARGEM DA BOX "BALANCE" NA TELA DO TOPO*/
        marginTop: -24,
        /*MARGEM DA BOX "BALANCE" NA TELA DA DIREITA PARA ESQUEDA*/
        marginStart: 14,
        /*MARGEM DA BOX "BALANCE" NA TELA DA ESQUERDA PARA DIREITA*/
        marginEnd: 14,
        /*CURVA DAS PONTAS DA BOX*/
        borderRadius: 4,
        /*ESPAÇAMENTO DA ESCRITA DO TOPO*/
        paddingTop: 22,
        /*ESPAÇAMENTO DA ESCRITA DA PARTE DE BAIXO*/
        paddingBottom: 22,
        /*SEMPRE ESSA BOX VAI FICAR SOB TODO MUNDO (FICANDO POR CIMA DE TODAS AS CAMADAS DA INTERFACE) */
        zIndex: 99,
    },

    itemTitle:{
        /*FONTE*/
        fontSize: 20,
        /*COR DO TEXTO*/
        color: '#dadada'
    },

    content:{
        /*UM DO LADO DO OUTRO*/
        flexDirection: 'row',
        /*ALINHADO NO CENTRO*/
        alignItems: 'center',

    },

    currencySymbol:{
        /*COR DO TEXTO*/
        color: '#dadada',
        /*MARGEM DO TEXTO DA DIREITA*/
        marginRight: 6,
    },

    balance:{
        /*FONTE*/
        fontSize: 22,
        /*COR DO TEXTO*/
        color: '#2ecc71'
    },

    expenses:{
        /*FONTE*/
        fontSize: 22,
        /*COR DO TEXTO*/
        color: '#e74c3c'
    }
})