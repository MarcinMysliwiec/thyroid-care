import React from 'react'
import { Text as ReactText, StyleSheet } from 'react-native'
import { Colors } from '../../helpers/colors.js';


const CustomText = props => {
    return (
        <ReactText style={[styles.text, props.style]}>
            {props.children}
        </ReactText>
    )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontFamily: 'Inter'
    },
});
