import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button } from 'react-native-paper';

export default props => {
    return(
        <View> 
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Entrar
            </Button>
        </View>
    )
}