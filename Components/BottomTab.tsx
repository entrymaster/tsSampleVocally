import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Entypo, Octicons,Ionicons,FontAwesome } from '@expo/vector-icons'; 

type BottomTabProps = {
    darkTheme: boolean
}

export const BottomTab: React.FC<BottomTabProps> = ({darkTheme}) => {
    return (
        <View style={darkTheme? styles.containerDark : styles.container}>
            <TouchableOpacity style={styles.tabTile}><Entypo name="compass" size={30} color={darkTheme ?"white":"black"} /></TouchableOpacity>
            <TouchableOpacity style={styles.tabTile}><Ionicons name="ios-map" size={30} color={darkTheme ?"white":"black"} /></TouchableOpacity>
            <View />
            <TouchableOpacity style={styles.centerTile}><Entypo name="plus" size={35} color={"white"} /></TouchableOpacity>
            <TouchableOpacity style={styles.tabTile}><Octicons name="bell" size={30} color={darkTheme ?"white":"black"} /></TouchableOpacity>
            <TouchableOpacity style={styles.tabTile}><FontAwesome name="user-o" size={30} color={darkTheme ?"white":"black"} /></TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#fff',
        height: 65,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    containerDark:{
        backgroundColor:'#000',
        height: 65,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    tabTile:{
        padding:10
    },
    
    centerTile:{
        position:'absolute',
        bottom:30,
        left: (Dimensions.get("window").width - 47)/2,
        padding: 12,
        backgroundColor: '#fb353d',
        borderRadius: 30
    },
   

})