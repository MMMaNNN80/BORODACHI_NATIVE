import React from "react";
import { SafeAreaView,View, Text, StyleSheet, Image,Button,ImageBackground } from "react-native";
import Background  from "./DOP_COMPONENTS/Background";

export const Connect = ({ navigation }) => {

    const obj = {
        head: `https://avatars.mds.yandex.net/get-altay/4581272/2a0000017af20e912c9812f420206401cd70/XXXL`,
        footer: 'https://avatars.mds.yandex.net/get-tycoon/1534598/2a0000017af8394142292b7682ea32b2c733/priority-headline-main-narrow',
        logo: `https://thumb.tildacdn.com/tild3431-3063-4931-a434-653939393562/-/resize/200x200/-/format/webp/1627499246005.png`
    
    }

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column',backgroundColor:'white',paddingTop:50 }}>
            <Background color={'black'} opacity={0.75}/>
            <View style={{height:200,width:'100%'
                        ,alignContent:'center'
                        ,justifyContent:'center' }}>
            <ImageBackground  style={[{flex:1,justifyContent:'center'}]}  resizeMode="cover" source={{ uri: obj.head }} >
                <View style={{
                     height: '80%'
                    , width: '100%'
                    , opacity: 0.6
                    ,backgroundColor:'black'
                 }} >
                    
                </View>
                <Image style={[
                    {   position:'absolute'
                        ,height:250
                        ,width:250
                        ,alignSelf:'center'
                        ,zIndex:5
                    }]} 
                        source={{ uri: obj.logo }} />  
                        </ImageBackground>
            </View>
            {/* Блок 2     */}

            <View style={styles.container} >
              
                <Text style={[styles.mtext, { alignSelf:'center',fontSize:21, fontWeight:'bold'}]}>{`Приветствуем Вас в приложении!`}</Text>
                <Text style={[ { alignSelf:'flex-start',fontSize: 13,paddingTop:30, color: 'silver' }]}>{`Сделайте свою запись впервые через мобильное приложение`}</Text>
                
                <View style={{alignSelf:'flex-start',padding:5,marginVertical:40}}>
                <Button 
                onPress={()=>navigation.navigate('MAIN',obj)}
                title={`                                                         Записаться                                                        `} 
                color='brown'
                 />
                
            </View>

       
            </View>
 
            

             <ImageBackground  style={[{flex:2,justifyContent:'flex-end',alignItems:'center'}]}  resizeMode="cover" source={{ uri: obj.footer }} >

                     <View style={[{padding:10}]}>
                    <Text style={[styles.mtext]}>{'Адрес: г.Краснодар, ул. Ставропольская 85'}</Text>
                    </View>
                </ImageBackground>
            

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    img: { width: '100%', flex:1 ,opacity:0.8},

    container: {
        flex: 1,
        flexDirection: 'column',   
        marginTop:10,
        padding:'4%',
        alignSelf: 'center',
        alignItem: "center",
        justifyContent: 'flex-start',
        zIndex:3
    }
    ,
    text: {
        lineHeight: 84,
         fontSize: 58
        ,color: 'rgba(255 ,255, 255 , 0.9)'
        ,letterSpacing: 2
        ,fontWeight: 'bold'
        ,alignContent:"center"
        ,alignSelf:'center'
        ,opacity:1
       
        ,textShadowColor: 'rgba(0, 0, 10, 0.8)'
        ,textShadowOffset: {width: -5, height: 5}
        ,textShadowRadius: 10
      

    },
    mtext: {

 color:'white'
,fontWeight: 'bold'

    },


})
