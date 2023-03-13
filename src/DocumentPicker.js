import React from 'react'
import {View, Text,Button} from "react-native"
import DocumentPicker from "react-native-document-picker"

export default function DocumentPicker1() {

    const selectDoc=async()=>{
        try{
            const doc =await DocumentPicker.pick({
                type:[DocumentPicker.types.pdf],
                allowMultiSelection:true
            })
            console.log(doc)
        }

        catch(err){
            if(DocumentPicker.isCancel(err)){
                console.log(err,"user cancelled the file upload")
            }
            else{
console.log(err)
            }
        }
    }


  return (
    <View style={{marginHorizontal:20,marginTop:200,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Text style={{marginTop:10,fontSize:20,marginBottom:20}}>DocumentPicker</Text>
        <Button title='Document Picker' onPress={()=>selectDoc()} />
    </View>
  )
}
