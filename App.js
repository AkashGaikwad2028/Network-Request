import React from 'react'
import {View,Text} from "react-native"
import DataAxios from './src/DataAxios'
import DataFecth from './src/DataFecth'
import DocumentPicker1 from './src/DocumentPicker'

export default function App() {
  return (
 <View>
      {/* <DataFecth/> */}
      {/* <DataAxios/> */}
      <DocumentPicker1/>
 </View>
  )
}
