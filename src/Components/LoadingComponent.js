import React from 'react'
import { Text, ActivityIndicator,View } from 'react-native'
import { Colors } from '../helpers/colors.js';


const LoadingComponent = props => {
    return (
        <>
            <ActivityIndicator size="large" color={Colors.secondary} />
            <Text style={{ color: Colors.white }}>{props.children}</Text>
        </>
    )
}

export default LoadingComponent
