import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Botao from './botao';

export default function App() {

  console.disableYellowBox = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");

  const [stringCalc, setStringCalc] = useState("0");

  var numbers = [];
  for(var i = 0; i <= 9; i++){
    numbers.push(i);
  }

  function logicaCalc(n){
    if(sinal == ""){
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalc(parseInt(firstNumber.toString() + n.toString()));
    }

    if((n == "/" || n == "x" || n == "+" || n =="-") && secondNumber == 0){
        setStringCalc(firstNumber.toString() + n);
        setSinal(n);
    }

    if(sinal != ""){
        setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
        setStringCalc(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
    }

    if(n == "="){
      let resulte = 0;

      if(sinal == "+"){
        resulte = firstNumber + secondNumber;

      } else if(sinal == "-"){
        resulte= firstNumber - secondNumber;

      }else if(sinal == "/"){
        resulte = firstNumber / secondNumber;

      }else if(sinal == "x"){
        resulte = firstNumber * secondNumber;

      }
      setStringCalc(resulte);
      setSinal("");
      setFirstNumber(resulte);
      setSecondNumber(0);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titulo}>
        <Text style={{color:"white", fontSize:40, height:100}}>Calculadora</Text>
      </View>

      <View style={styles.topo}>
        <Text style={{fontSize:35, color:'white', paddingBottom:70}}>{stringCalc}</Text>
      </View>
      
    
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>logicaCalc('+')} style={{width:'20%', backgroundColor:'rgba(20,20,20,0.5)', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:30, color:'white'}}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalc('-')} style={{width:'20%', backgroundColor:'rgba(20,20,20,0.5)', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:30, color:'white'}}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalc('/')} style={{width:'20%', backgroundColor:'rgba(20,20,20,0.5)', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:30, color:'white'}}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalc('x')} style={{width:'20%', backgroundColor:'rgba(20,20,20,0.5)', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:30, color:'white'}}>x</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalc('=')} style={{width:'20%', backgroundColor:'rgba(20,20,20,0.5)', alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:30, color:'white'}}>=</Text></TouchableOpacity>
      </View>

      <View  style={{flexDirection: 'row', flexWrap: "wrap", borderTopColor: 'black', borderTopWidth:2}}>
        {
          numbers.map(function(e){
            return (<Botao logicaCalc={logicaCalc} number = {e}></Botao>)
          })
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62e3bc',
  },
  titulo: {
    textAlign: 'center',
    alignItems:'center',
    marginTop:15
    // bottom: 300
  },
  topo:{
    paddingLeft:20,
    borderBottomWidth:2,
    height: '41.8%',
    justifyContent:'center'
  },
});
