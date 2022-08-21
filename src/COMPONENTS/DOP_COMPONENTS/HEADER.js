import React from "react";
import { Text,View, StyleSheet } from "react-native";
import SEPARATOR from "./SEPARATOR";


export default function HEADER( {bText,sText}) {

    return(

    <View style={{ alignSelf: 'center', width: '100%', marginTop: 5, opacity: 0.8 }}>

    
    <Text style={{
        padding: 10,
        fontSize: 22,
        textTransform: 'uppercase'
        , color: 'whitesmoke'
        , fontWeight: '700'
        , alignSelf: 'center'
        , letterSpacing: 2
        , textShadowColor: 'white'
    }}>{bText}</Text>
<SEPARATOR/>
    <Text style={{ color: 'white', opacity: 0.8, paddingLeft: 20, textTransform: 'uppercase', fontSize: 13 }}>{sText}</Text>

</View>
    )

}