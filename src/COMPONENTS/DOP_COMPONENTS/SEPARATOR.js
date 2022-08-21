import React from "react";
import {View } from "react-native";


export default function SEPARATOR( {color}) {

    const color_  = color? color : '#fff'
    return(<View style={{height: 0.8, width: '100%', backgroundColor: color_,opacity:0.3,marginVertical:5}} />)

}