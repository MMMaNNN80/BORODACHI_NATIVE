import React from "react";
import { Text,View } from "react-native";


export default function BUTTON ( {sObj={},tObj={},text=''}) {

    return(

        <View style={{...sObj}}>

<View style={{position:'absolute',backgroundColor:'blue',width:'100%',height:'100%',opacity:0.1}}/>

                
        

     <View style={{ borderWidth: 1, borderColor: 'silver', opacity: 0.8, padding: 5, borderRadius: 5, marginVertical: 2,zIndex:1 }}>
     <Text style={{ color: 'silver', fontSize: 12,...tObj ,zIndex:10}}>{text}</Text>  
        </View> 
    

        </View>

        
    )

}