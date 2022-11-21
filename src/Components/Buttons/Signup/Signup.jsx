import { useCallback, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Button } from 'react-native-paper';

export default props => {
    return(
       <View>
        <Text style={{fontSize: 12}}>Ainda não tem uma conta?</Text>
        <Button
            mode="text" 
            onPress={() => console.log('Pressed')}>
            Cadastre-se!
        </Button>
       </View> 
    )

}