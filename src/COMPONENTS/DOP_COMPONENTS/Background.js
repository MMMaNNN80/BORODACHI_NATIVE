import React from "react";
import { View} from "react-native";


export default function Background  ({color,opacity,top})  {
 const top_ = top ? top :0
 const color_ =  color ? color:'black' 
 const opacity_ = opacity ? opacity : 0.9
   
 return (<View style={{flex:1,position:'absolute',top:top_,width:'100%',height:'100%',backgroundColor:color_,opacity:opacity_}} />)
}

