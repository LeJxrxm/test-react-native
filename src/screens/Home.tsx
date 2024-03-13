import {TextInput, View, StyleSheet, Button, ScrollView} from "react-native";
import H1 from '../components/Titles/H1';
import Divider from "../components/Divider";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {set} from "../features/search/searchSlice";
const Home = ({navigation}) => {

    const userName: string = 'Jérémy';
    const [search, setSearch] = useState(useSelector((state: any) => state.search.value));
    const dispatch = useDispatch();

    const handleClick = (): void => {
        // console.log(search);
        dispatch(set(search))
        navigation.navigate('SearchResult');
    };

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <H1 content={`Bonjour ${userName} !`} />
            <Divider/>
            <TextInput style={styles.input} onChangeText={setSearch} value={search} inputMode={"text"} placeholder={"Entrer le nom d'une ville"} />
            <View style={{marginTop: '15px', borderRadius: 8}}>
                <Button title={"Rechercher"} onPress={handleClick} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%'
    },
    input: {
        height: 40,
        width: '80%',
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
        borderWidth: 1, // Ajout de la bordure à l'input
        borderColor: '#ccc', // Couleur de la bordure
        borderRadius: 8, // Rayon de la bordure
    }
});

export default Home;
