import React from "react";
import { View, StyleSheet, Platform, Image, Text } from "react-native";

type BannnerProps = {
    darkTheme: boolean
}

export const Banner: React.FC<BannnerProps> = ({darkTheme})=>{
    return (
        <View style={[styles.container, Platform.OS === 'ios' ? styles.shadowIOS: styles.shadowAndroid, {backgroundColor: darkTheme ? '#333333': '#fff' }]}>
            <Image style={styles.image} source={require("../assets/pub.png")} />
            <View style={styles.bannerText}>
            <Text style={[styles.bannerHeading, {color: darkTheme ? '#d3d3d3': '#000' }]}>Lokál Hamburk</Text>
            <Text style={styles.bannerDesc}>Pub in Prague</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 110,
        width: "90%",
        left:"5%",
        flexDirection:'row',
        height: 120,
        borderRadius:12,
        padding: 15
    },
    shadowIOS: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      shadowAndroid: {
        elevation: 10,
        shadowColor: '#000'
      },
      image:{
          height:90,
          width: 90,
          borderRadius:10
      },
      bannerText:{
        alignSelf:'center',
        paddingLeft: 15
      },
      bannerHeading:{
        fontSize:18,
        fontWeight: 'bold'
      },
      bannerDesc:{
        fontSize:15,
        color:'#afafaf'
      }
})