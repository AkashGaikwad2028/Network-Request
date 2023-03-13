import React, { useEffect, useState } from 'react'
import {View,Text} from "react-native"

export default function DataFecth() {

    const [getData,setGetData] =useState()


    const FetchGetData= async()=>{
        try{
         await fetch ("https://jsonplaceholder.typicode.com/posts")
           .then (response => response.json())
           .then (data => console.log("data",data))
        }
        catch(e){
            console.log("error-message",e)
        }
    }


    const FetchPostData= async()=>{
        let _data = {
            "userId":1,
            id:100,
            titel:"Added new data",
            "body": "added data of body"
          }
        try{
         await fetch ("https://jsonplaceholder.typicode.com/posts",{
           method:"POST",
           body:JSON.stringify(_data),
           headers:{"Content-type": "application/json; charset=UTF-8"}
         })
           .then (response => response.json())
           .then (data => console.log("Post-data",data))
        }
        catch(e){
            console.log("error-message",e)
        }
    }



    useEffect(()=>{
        FetchGetData()
        FetchPostData()
    },[])

    console.log("datattttttttttt",getData)

  return (
  <View>
    <Text>
        WithFetch
    </Text>
  </View>
  )
}
