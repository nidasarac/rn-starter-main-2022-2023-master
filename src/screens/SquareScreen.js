import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () =>{
    return (
        <View>
        <ColorCounter color="Red"/>
        <ColorCounter color="Green"/>
        <ColorCounter color="Blue"/>
        
        </View>
    );
};

const styles= StyleSheet.create({});

export default SquareScreen;