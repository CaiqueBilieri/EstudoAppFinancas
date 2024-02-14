import { StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


const list = [
    {
        id: 1,
        label: 'Boleto conta Luz',
        value: '300,90',
        date: '25/02/2024',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Pai',
        value: '187,00',
        date: '13/02/2024',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '10/02/2024',
        type: 1 // receita
    }
]

export default function Home() {
    return (
    <View style={styles.container}>
        <Header name='Caique Bilieri'/>
        
        <Balance saldo='9.250,90' gastos='-527,00'/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
            style={styles.list}
            /*INDICAR O ARRAY QUE ESTAMOS LISTANDO*/
            data={list}
            /*CONVERTENDO O ID SEMPRE EM STRING (CASO NAO RECEBEMOS COMO NUMERO)*/
            keyExtractor={(item => String(item.id))}
            /*TIRAR A BARRA DE ROLAGEM*/
            showsVerticalScrollIndicator={false}
            /*RESPONSAVEL QUE VAI RENDERIZAR CADA ITEM QUE LISTAMOS NO ARRAY*/
            renderItem={ ({item}) => <Moviments data={item}/>}
        />

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,

    },

    list:{
        marginStart: 14,
        marginEnd: 14
    }
});