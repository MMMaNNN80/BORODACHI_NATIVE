import React from "react";
import { View, ActivityIndicator, Text } from "react-native";


export default function LOADER() {
    return  ( 
    <View style={{ position: 'absolute', flex: 1, width: '100%', height: '100%', alignContent: 'center', justifyContent: 'center' }}>
        <Text 
        style={{ alignSelf: 'center', fontWeight: '700', color: 'white', fontSize: 18, marginBottom: 10 }}>
            Подождите, загрузка...
    </Text>
        <ActivityIndicator size="large" color="orange" />
    </View>
    )
}