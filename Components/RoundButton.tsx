import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";

type RoundButtonProps = {
    darkTheme:boolean,
    onPressHandler: ()=> void;
    children?: JSX.Element | JSX.Element[];
}

export const RoundButton: React.FC<RoundButtonProps> = ({darkTheme, onPressHandler, children,}) =>{
    return (
        <TouchableOpacity style={[styles.container,Platform.OS === 'ios' ? styles.shadowIOS: styles.shadowAndroid,{backgroundColor: darkTheme ? '#333333': '#fff'}]} onPress={onPressHandler} >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
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
        elevation: 8,
        shadowColor: '#000'
      },
})