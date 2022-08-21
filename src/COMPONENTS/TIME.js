import React,{useState}  from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator ,Button} from "react-native";
import Background from "./DOP_COMPONENTS/Background";
import Logo from "./DOP_COMPONENTS/LOGO";
import HEADER from "./DOP_COMPONENTS/HEADER";
import DateTimePicker from '@react-native-community/datetimepicker';




export const TIME = ({ route, navigation }) => {

      const [datePicker, setDatePicker] = useState(false);
     
      const [date, setDate] = useState(new Date());

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  function showDatePicker() {
    setDatePicker(true);
  };

    return (
        <View style={styles.container}>

            <Logo obj={route.params} />
            <Background color={'blue'} opacity={0.2} />
            <Background color={'black'} opacity={0.9} />
            <View style={styles.box}>

                <HEADER bText={'ЗАПИСЬ ПО ВРЕМЕНИ'} sText={'Выберите время для записи:'} />
                <View>

             

        <Text style={styles.title}>
          React Native Date Picker – To Pick the Date using Native Calendar
        </Text>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
             display= {Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            positiveButtonLabel="OK!"
            
            MinimumDate ={new Date(2022,8,18)}
            style={{}}
          />
        )}
 

 
        {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Show Date Picker" color="green" onPress={showDatePicker} />
          </View>
        )}
 
      


    </View>



            </View>
            <View style={{ alignSelf: 'flex-end', padding: 10, width: '100%' }}>
                <TouchableOpacity style={{ borderRadius: 5, width: '100%', borderWidth: 1, padding: 5, backgroundColor: 'brown' }}
                    onPress={() => navigation.navigate('MAIN')}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 13, letterSpacing: 2 }}>{'НАЗАД'}</Text>
                </TouchableOpacity>
            </View>
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
    ,title:{
        color:'white',
        fontSize:16
    }


})


