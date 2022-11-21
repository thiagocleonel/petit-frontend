import { useCallback, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Button } from 'react-native-paper';

export default props => {
    const styles = StyleSheet.create({
        logo: {
            flex: 1,
            justifyContent: "center",
            padding: 10,
            marginVertical: 20,
        }
      });

    return(
        <View> 
            <Text>Faça login com:</Text>
            <Button icon="google" mode="contained" onPress={() => console.log('Pressed')}>
                Google
            </Button>
        </View>
    )
}