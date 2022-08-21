import React, { useState, useEffect, useRef } from "react";
import {  Text, View, StyleSheet, Button, TouchableOpacity, FlatList, Image, Modal, ActivityIndicator } from "react-native";
import Background from "./DOP_COMPONENTS/Background";
import Logo from "./DOP_COMPONENTS/LOGO";
// import { getData } from "../API/Api";


export const MAIN = ({ route, navigation }) => {
const mass = 
[{id:1, name:"ВЫБОР СОТРУДНИКА",comp:'Staff', img:require('../../assets/icons/boroda.png')},
{id:2, name: "ВЫБОР УСЛУГ ",comp:'SERVICE' , img:require('../../assets/icons/Nognici.png')},
{id:3, name: "ВЫБОР ПО ДАТЕ",comp:'TIME', img:require('../../assets/icons/clock.png') },
]

    return(
    <View style={styles.container}>

        <Logo obj={route.params} />
        <Background color={'black'} opacity={0.9} />
        
        <View style={styles.box}>
       
        <Text style={{ paddingVertical:20,alignSelf:'center',color: 'white', opacity: 0.8, textTransform: 'uppercase', fontSize: 13 }}>Настройки записи:</Text>
        
        <View style={{marginTop:10,alignSelf:'center'}} > 
        {  mass.map(r=>{
            return(
           
              <TouchableOpacity  style={{
                 borderRadius:7
                ,width:300
                ,padding:15
                ,alignself:'center'
                ,marginVertical:5
                ,justifyContent:'center'
                ,backgroundColor:'#0e2130'
                ,marginHorizontal:100
                ,flexWrap:'wrap'
                }} key={r.id}
                onPress= {()=>{navigation.navigate(r.comp)}}
                >
                   <View style={{flexDirection:'row',alignContent:'center'}}>
                    
                     <Image source={r.img}
                     style={{   width: 25,
                        height: 25,}}
                     /> 
                    <Text style={{textTransform:'uppercase',color:'white',marginLeft:10}}>{r.name}</Text>
                    </View>  

              </TouchableOpacity>
            )})
            }
            </View>
       
       
       
       
        </View>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        ,position:'absolute'
        , marginTop: 40
         ,width: '100%'
        ,height:'100%'
    
     
    }
    ,box:{
       position:'relative'
       ,alignSelf:'center'
        

    }


})


