import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, Text, View, StyleSheet, Button, TouchableOpacity, FlatList, Image, Modal } from "react-native";
import Background from "./DOP_COMPONENTS/Background";
import Logo from "./DOP_COMPONENTS/LOGO";
import { getData } from "../API/Api";
import HEADER from "./DOP_COMPONENTS/HEADER";
import LOADER from "./DOP_COMPONENTS/LOADER_1";
export const Staff = ({ route, navigation }) => {
    const R = useRef(false)
    // const T = useRef(false)
    const [staff, setStaff] = useState([])
    // console.log(new Date().toLocaleDateString().split('.').reverse().join(''))
    useEffect(() => {
        if (!R.current) {
            getData({ type: 'STAFF' })
                .then(staff => { setStaff(staff?.data.reverse()) })
                .then(m => console.log(m))
                .then(R.current = true)
        }
    }), []


    const [isOpen, setIsOpen] = useState({ o: false, id: 0 })

    return (
        <SafeAreaView style={styles.container}>

            <Logo obj={route.params} />
            <Background color={'black'} opacity={0.87} />
            {/* Блок 2 */}


            <HEADER bText={'---  БАРБЕРЫ  --- '} sText={'Выберите сотрудника:'} />

            {/* CARDS BARBERS */}
            { staff?.length ? <View style={styles.mastersBox}>     


                <FlatList
                    data={staff}
                    renderItem={({ item }) =>

                        <View key={item.id}
                            style={{ flex: 1, paddingBottom: 18 }} >


                            <View style={{
                                flexDirection: 'row'
                                , flexWrap: 'wrap'
                                , justifyContent: 'flex-start', alignItems: 'flex-start', padding: 5, backgroundColor: 'whitesmoke', width: '100%', height: '100%'
                            }}>
                                <Background color={'black'} opacity={0.05} top={5} />

                                <TouchableOpacity style={{ marginTop: 5 }} onPress={() => setIsOpen({ o: true, id: item.id })}>
                                    <Image source={{ uri: item.avatar }} style={{ height: 80, width: 75, zIndex: 1 }} />
                                </TouchableOpacity>


                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', padding: 1, marginLeft: 5 }}>{item.name} </Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            {new Array(parseInt(!isNaN(item.rating) ? item.rating : 0)).fill(0).map
                                                ((el, i) => <Image key={i} source={require('../../assets/zvezda/zvezda.png')}
                                                    style={{ height: 12, width: 12, zIndex: 2, marginLeft: 2 }} />
                                                )}

                                        </View>


                                    </View>


                                    <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
                                        <Text
                                            onPress={() => console.log(item.id)}
                                            style={{
                                                fontSize: 14, textDecorationLine: 'underline', color: 'black'
                                            }}>{`Отзывы (${item.comments_count})`}
                                        </Text>
                                        <Text style={{ fontSize: 10, fontWeight: '500' }}>{`Рейтинг: ${item.rating}`}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ alignSelf: 'flex-end', opacity: 1 }}>
                                    <TouchableOpacity style={{ borderRadius: 5, width: 80, borderColor: 'white', borderWidth: 1, padding: 5, backgroundColor: 'brown' }} onPress={() => console.log(item.avatar)}>
                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 9 }}>ВЫБРАТЬ</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>



                        </View>}

                />
                    <ModalWindow isOpen={isOpen} staff={staff} setIsOpen={setIsOpen} />

            </View> : <LOADER/>}
           
            <View style={{flex:1, position:'absolute', padding: 10, width: '100%',height:'100%', alignContent:'center',justifyContent:'flex-end'}}>
                <TouchableOpacity style={{ alignSelf:'flex-end',justifyContent:'flex-end',borderRadius: 5, width: '100%', borderWidth: 1, padding: 5, backgroundColor: 'brown' }}
                    onPress={() => navigation.navigate('MAIN')}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 13, letterSpacing: 2 }}>{'НАЗАД'}</Text>
                </TouchableOpacity>
            </View>

        
        </SafeAreaView>

    )

}

const ModalWindow = ({ isOpen, staff, setIsOpen }) => {
    console.log(isOpen)
    return (
        <Modal visible={isOpen.o}>
            <Background />

            <View style={[{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'flex-start' }]} >

                <Image source={{ uri: staff.filter(el => el.id === isOpen.id)[0]?.avatar_big }} style={{ height: '92%', width: '92%', zIndex: 10 }} />
                <View style={{ alignContent: 'flex-end' }}>

                    <Button style={{ zIndex: 20, alignSelf: 'flex-end' }}
                        onPress={() => setIsOpen({ o: false, id:isOpen.id })}
                        title={`                                                         Назад                                                        `} color='brown' />
                </View>

            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
        , alignItems: 'flex-start'
        , justifyContent: 'flex-start'
        , backgroundColor: 'darkgrey'
        , marginTop: 40
    }
    , mastersBox: {
        flex: 1
        , flexWrap: 'nowrap'
        , alignSelf: 'flex-start'
        , justifyContent: "flex-start"

        , padding: 15
        , width: '98%'



    }

})




{/* <View style={{flex:4}}>

<View style={{  backgroundColor: 'black', width:'100%', alignItems: 'center' }}>
 <View/>       
 
 <View style={{padding: 5,width:'100%'}}>
     

 </View>



 </View>

</View> */}