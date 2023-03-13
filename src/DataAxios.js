import React, { useEffect, useState } from 'react'
import {View,Text} from "react-native"
import axios from 'axios'

export default function DataAxios() {
    
    const [data,setData]=useState()

    const fetchDataWithAxios=()=>{
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((data)=>console.log("data with axios",data.data))
            .catch((error)=>console.log("error message",error))
    }

    const fetchPostWithAxios=()=>{
        let _data = {
            "userId":1,
            id:100,
            titel:"Added new data",
            "body": "added data of body"
          }

        axios
        .post("https://jsonplaceholder.typicode.com/posts",{
        body:JSON.stringify(_data),
        headers:{"Content-type": "application/json; charset=UTF-8"}
        })
        .then((data)=>console.log("data with axios",data.data))
        .catch((error)=>console.log("error message",error))
}


    useEffect(()=>{
        fetchDataWithAxios()
        fetchPostWithAxios()
    },[])



  return (
    <View>
        <Text>
            DataAxios
        </Text>
    </View>
  )
}
