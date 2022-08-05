import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [Fecha, setFecha] = useState("");
  const [Nombre, setNombre] = useState("");
  const [LastName, setApellido] = useState("");
  const [Concepto, setConcepto] = useState("");
  const [Codigo, setCodigo] = useState("");
  const [Cuenta, setCuenta] = useState("");
  const [debit, setDebito] = useState("");
  const [Credit, setCredito] = useState("");


  const saveDate = (text: string) => {
    //validar que sea una fecha de verdad
    if (text.length >= 10 && text !== "2022-07-29") {
      alert("ERROR");
      return;
    }

    if (text.length >= 10) {
      setFecha(text);
      console.log(Fecha);
    }
  };

  const saveName = (text: string) => {
    setNombre(text);
    console.log(Nombre);
  };

  const saveLastName = (text: string) => {
    setApellido(text);
    console.log(LastName);
  };

  const saveConcepto = (text: string) => {
    setConcepto(text); 
    console.log(Concepto);
  };

  const saveCodigo = (text: string) => {
    setCodigo(text);
    console.log(Codigo);
  };

  const saveCuenta = (text: string) => {
    setCuenta(text);
    console.log(Cuenta);
  };

  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };

  const savedebit = (text: string) => {
    console.log(
    `La variable text con el valor ${text} es un numero ?: ${isNumber(text)}`);
  };

  const saveCredit = (text: string) => {
    console.log(`La variable text con el valor ${text} es un numero ?: ${isNumber(text)}`);
  };

  const saveJournal = () => {alert("Hola")};

  return (
    <View>
      <Text>APP journal</Text>

      <Text>Fecha</Text>
      <TextInput 
      placeholder='Fecha' 
      onChangeText={(text) => saveDate(text)}/>

      <Text>Nombre</Text>
      <TextInput placeholder='Nombre' 
      onChangeText={(text) => saveName(text)}/>

      <Text>Apellido</Text>
      <TextInput placeholder='Apellido' onChangeText={(text) => saveLastName(text)}/>

      <Text>Concepto</Text>
      <TextInput placeholder='Concepto' onChangeText={(text) => saveConcepto(text)}/>

      <view>
      <Text>Codigo</Text>
      <TextInput placeholder='Codigo' onChangeText={(text) => saveCodigo(text)}/>

      <Text>Cuenta</Text>
      <TextInput placeholder='Cuenta' onChangeText={(text) => saveCuenta(text)}/>

      <Text>Debito</Text>
      <TextInput placeholder='Debito' onChangeText={(text) => savedebit(text)}/>

      <Text>Crédito</Text>
      <TextInput placeholder='Crédito' onChangeText={(text) => saveCredit(text)}/>

      <Button title='Guardar' onPress={() => saveJournal} />

      </view>
    </View>  
  );
}
  

