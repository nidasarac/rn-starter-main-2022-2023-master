import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Button,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const KullaniciGirisi = () => {
    return (
        <View style ={{justifyContent:"center",alignSelf:"center",
        alignContent:"center",width:500,height:700,backgroundColor:"white"}}>

            <Image
                source={require('../../images/trakyaüni.png')}
                style={{justifyContent:"center",
                width:400,
                height:150,
                alignSelf:"center",
                alignContent:"center"}}

            ></Image>
            <Text style={styles.textStyle}>Kullanıcı Girişi</Text>
            <TextInput placeholder='Kullanıcı Adını Gir' 
            style={{height:42,width:"80%",borderWidth:1,alignSelf:"center"}}></TextInput>
            <Text style={styles.textStyle}>Şifre</Text>
            <TextInput placeholder='Şifreni Gir'
            style={{height:42,width:"80%",borderWidth:1,alignSelf:"center"}}></TextInput>
            <TouchableOpacity style={{borderWidth:1,height:42,width:"70%",
        justifyContent:"center",alignItems:"center",borderRadius:40,
        backgroundColor:"grey",alignContent:"center",marginTop:10,alignSelf:"center"}}>
            <Text style={{color:"white"}}>Giriş Yap</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles= StyleSheet.create({
    textStyle: {
        marginHorizontal:10,
        marginVertical:1,
        height:40,
        fontSize:30,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
    }
});

export default KullaniciGirisi;