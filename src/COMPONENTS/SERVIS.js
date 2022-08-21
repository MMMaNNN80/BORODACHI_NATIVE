import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView
} from "react-native";
import BUTTON from "./DOP_COMPONENTS/BUTTON";

import Background from "./DOP_COMPONENTS/Background";
import Logo from "./DOP_COMPONENTS/LOGO";
import HEADER from "./DOP_COMPONENTS/HEADER";
import { getData } from "../API/Api";
import SEPARATOR from "./DOP_COMPONENTS/SEPARATOR";
import LOADER from "./DOP_COMPONENTS/LOADER_1";




export const SERVICE = ({ route, navigation }) => {
    const R = useRef(false)
    const InitCategory = useRef([])
    const CurrCategory = useRef([])
    const InitServ = useRef([])
    const [category, setCategory] = useState([])
    const [serv, setServ] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    // console.log(new Date().toLocaleDateString().split('.').reverse().join(''))
    useEffect(() => {
        if (!R.current) {
            getData({ type: 'SERV' })
                .then(serv => { //setServ(serv?.data); 
                    const mass = serv?.data.category?.map(el => { return { ...el, open: false,cntpos:0 } })
                    const massServ=serv?.data.services?.map(el => { return { ...el, selected: false } })
                    setCategory(mass)
                    setServ(massServ)
                    InitCategory.current = mass
                    CurrCategory.current = mass
                    InitServ.current = massServ

                }
                )
                .then(R.current = true)
        }
    }), []


    const pressCategory = (id) => {
        const mass = category.map(el => { return { ...el, open: id === el.id ? !el.open : el.open } })
        CurrCategory.current = mass
        if (mass.filter(el => el.open)) { setIsOpen(true) }
        setCategory(CurrCategory.current)


    }
    const selectServ = (id) => {
        const mass = serv.map(el => { return { ...el, selected: id === el.id ? !el.selected : el.selected } })
       setServ(mass)

    }

    const openAllLists = () => {
        setIsOpen(!isOpen)
        isOpen ? setCategory(InitCategory.current) : setCategory(CurrCategory.current)

    }




    // '#0e2130'
    return (
        <View style={styles.container}>
            <Logo obj={route.params} />
            <Background color={'grey'} opacity={0.8} />
            <Background color={'black'} opacity={0.8} />

            <View>
                <HEADER bText={'УСЛУГИ'} sText={'Выберите необходимые услуги:'} />
                

            </View>
  
  {/* Кнопки */}

            <View style={{ flexDirection:'row',width: '100%',justifyContent:'space-between' ,paddingVertical:10}}>
            <View  style={{flexDirection:'row'}}>
            <TouchableOpacity  style={{marginHorizontal:10}}
                    onPress={() => navigation.navigate('MAIN')} >
                        <BUTTON text={`<----- НАЗАД`} />
            </TouchableOpacity>
            <TouchableOpacity 
                    onPress={openAllLists} >
                        <BUTTON  text={`-----> В ЗАКАЗ`} />
            </TouchableOpacity>

                    </View>
                    <View style={{flexDirection:'row'}}>
            <TouchableOpacity  
                    onPress={openAllLists} >
                        <BUTTON text={`СВЕРНУТЬ`} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{setCategory(InitCategory.current);setServ(InitServ.current) }}>
                    <BUTTON text={`СБРОСИТЬ`} tObj={{color:'orange'}}/>
                    </TouchableOpacity>
                    </View>
            </View>
            <SEPARATOR/>       
                     {/* Меню услуг */}
        
        
   { category.length>0 ? <ScrollView style={{ marginTop: 5 }}>
{/* КАТЕГОРИИ */}

                {category ? category.map(item => {
                    const cnt = serv.filter(el=>el.category_id === item.id && el.selected).length

                    return (
                        <View key={item.id} style={{ opacity: item.open ? 1 : 0.8 }}>
                            <TouchableOpacity

                                style={[styles.mastersBox, { backgroundColor: '#0e2130', borderColor: !item.open ? 'black' : 'green' }]}
                                onPress={() => pressCategory(item.id)}
                            >

                                <Text style={{
                                    position: 'relative'
                                    , color: 'white'
                                    , fontSize: 15
                                    , fontWeight: '700'
                                    , letterSpacing: 1
                                    , textTransform: 'uppercase'
                                    , paddingVertical: 5
                                    , paddingLeft: 10
                                }}>{item.title}
                                </Text>

                                <View style={{ width: '100%', height: 25 }}>
                                    <View style={{
                                        flex: 1, position: 'absolute', width: '100%', alignItems: 'flex-start',
                                        height: '100%', backgroundColor: 'black', opacity: 0.22
                                    }}>
                                    </View>
                                   {cnt>0 ? <Text style={{ color: 'silver', fontSize: 12, zIndex: 10, alignSelf: 'flex-end', paddingRight: 40, paddingVertical: 5 }}>{`ВЫБРАНО:  ${cnt} позиций`}</Text>:null}
                                </View>

                          </TouchableOpacity>
{/* УСЛУГИ */}

                            {item.open ? serv.filter(s => s.category_id === item.id)
                                .map( s => {
                                    const price = s?.prepaid_settings?.prepaid_full?.amount === 0
                                        ? 'Не указано'
                                        : s?.prepaid_settings?.prepaid_full?.amount
                                    return (
                                          <TouchableOpacity key={s.id} 
                                          onPress={()=>selectServ(s.id)}>
                                        <View style={{ flex: 1,flexDirection:'row', paddingHorizontal: 15,justifyContent:'space-around' }}>
                                            <View style={{ padding: 5, flexDirection: 'row', flex: 1, flexWrap: 'wrap', overflow: 'hidden' }}>
                                                
                                            <View style={{ position:'absolute',backgroundColor: 'blue',height:'100%',width:'100%',opacity:0.04,zIndex:-1 }}/>
                                            
                                                <Text style={{ color: 'white', fontSize: 13 }}>{`${s.title} - `}</Text>
                                                <Text style={{ color: 'orange', fontSize: 12, justifyContent: 'space-between', paddingRight: 30, }}>{price}</Text>
                                             
                                            </View>
                                            <View style={{height:25
                                                ,width:25
                                                ,backgroundColor:s.selected ?'green':'transparent',opacity:0.7,borderColor:'silver',alignSelf:'center',borderWidth:1,borderRadius:2}}/>
                                            </View>                                    
      
                                            <SEPARATOR />
                                        </TouchableOpacity>
                                    )
                                }) : null}


                        </View>

                    )
                }) : null}

                <View style={{height:50}}></View>



            </ScrollView> : <LOADER/>}


        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
        , position: 'absolute'
        , marginTop: 40
        , width: '100%'
        , height: '100%'


    }
    , box: {
        position: 'relative'
        , alignSelf: 'center'




    }
    , mastersBox: {

        alignSelf: 'center'
        , justifyContent: "center"
        , width: '95%'

        , borderRadius: 7
        , borderWidth: 1
        , marginBottom: 12





    }
    , Btext: {
        color: 'white'
        , fontSize: 15
        , letterSpacing: 1
        , textTransform: 'uppercase'
        , alignSelf: 'flex-start'
        , width: '100%'
        , flexDirection: 'row'
    }


})

