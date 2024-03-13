import React, {useState} from "react";
import {Button, Image, ScrollView, Text, View} from "react-native";
import H1 from "../components/Titles/H1";
import {useSelector} from "react-redux";
import axios from "axios";
import Divider from "../components/Divider";

const SearchResult = ({navigation}) => {

    const search = useSelector((state: any) => state.search.value);

    const [results, setResults] = useState(false);
    const [wind, setWind] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [ressenti, setRessenti] = useState(null);
    const [image, setImage] = useState();

    axios
        .get(`http://api.weatherapi.com/v1/current.json?q=${search}&key=6ff85aacbcbe4b248ed223041241303`)
        .then(res => {
            console.log(res.data);
           setWind(res.data.current.wind_kph);
           setTemperature(res.data.current.temp_c);
           setRessenti(res.data.current.feelslike_c);
           setImage(res.data.current.condition.icon);
           setResults(true);
        }).catch((err) => console.error(err));

    return (
        <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <H1 content={`Résultats pour "${search}"`}/>
            {results && (
                <View>
                    <Divider/>
                    <Text>Vent: {wind} km/h</Text>
                    <Text>Température: {temperature} °C (ressenti {ressenti} °C) </Text>
                </View>
            )}
        </ScrollView>
    );
};

export default SearchResult;
