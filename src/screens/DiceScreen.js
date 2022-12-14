import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Dice1 from '../../images/dice1.png';
import Dice2 from '../../images/dice2.png';
import Dice3 from '../../images/dice3.png';
import Dice4 from '../../images/dice4.png';
import Dice5 from '../../images/dice5.png';
import Dice6 from '../../images/dice6.png';

const DiceScreen = () => {
  const [uri,setUri] = useState(Dice1);

  const buttonTapped = ()=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1

    switch(randomNumber){
      case 1: setUri(Dice1);
        break;
      case 2: setUri(Dice2);
        break;
      case 3: setUri(Dice3);
        break;
      case 4: setUri(Dice4);
        break;
      case 5: setUri(Dice5);
        break;
      case 6: setUri(Dice6);
       break;
      default: setUri(Dice1);
    }
  }

  return(
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={uri}
      />
      
      <TouchableOpacity onPress={buttonTapped}>
        <Text style={styles.texts}>Roll the Dice</Text>
      </TouchableOpacity>
    </View>
  )
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:200,
      height:200
    },
    texts:{
      fontSize:26,
      color:'#35BDD0',
      marginTop: 30,
      fontStyle: 'italic',
      paddingHorizontal: 10,
      borderColor: '#30475E',
      borderRadius: 5,
      borderWidth: 3,
      fontWeight: 'bold'
    }
  });
  
  export default DiceScreen;