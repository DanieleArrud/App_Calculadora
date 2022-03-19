import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Botao(props) {

    return(
        
        <View style={styles.botaoNumber}>
            <TouchableOpacity onPress={()=>props.logicaCalc(props.number)} style={{width:'100%', height:70, justifyContent:'center'}}>
              <Text style={{textAlign: 'center', fontSize:22, color:'black'}}>{props.number}</Text>  
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botaoNumber:{
        backgroundColor: 'rgba(232, 235, 232, 4)', 
        borderColor: 'white', 
        borderWidth:1, 
        width:'33.3%',
    }
})