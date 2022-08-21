import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";


export default function Logo( ) {
    const height = 150
    
    const obj = {
        head: `https://avatars.mds.yandex.net/get-altay/4581272/2a0000017af20e912c9812f420206401cd70/XXXL`,
        footer: 'https://avatars.mds.yandex.net/get-tycoon/1534598/2a0000017af8394142292b7682ea32b2c733/priority-headline-main-narrow',
        logo: `https://thumb.tildacdn.com/tild3431-3063-4931-a434-653939393562/-/resize/200x200/-/format/webp/1627499246005.png`
    
    }
    
    return (

        <View style={{
          margin:0
         ,alignItems:'flex-start'
        ,justifyContent:'flex-start'
        ,height:height }}>

          <View style={{
                    position:'absolute'
                    ,marginTop:10
                    ,height: height-20
                    ,width:'100%'
                    ,backgroundColor:'darkred'
                    ,opacity:0.09
                    ,zIndex:2
                    
                }} />
            <ImageBackground
                source={{ uri: obj.logo }}
                style={[styles.imgBox,{height:height}]}
                resizeMode="contain" />           
      
    
        </View>

    )
}

const styles = StyleSheet.create({
imgBox: {
     
        justifyContent: "center",
         width:'100%'
        ,alignSelf:'center'
        ,zIndex:3
        ,position:'relative'
    }

})
