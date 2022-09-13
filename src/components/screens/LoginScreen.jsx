import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Logo from '../imgs/Logo'
import InputText from '../inputs/InputText'
import { Button } from "@react-native-material/core";

export default props => {
  const styles = StyleSheet.create({
    view: {
      display: "flex"
    }
  });

  return(
    <View >
      <Logo></Logo>
      <InputText></InputText>
      <InputText></InputText>
      <Button title="Enviar"> </Button>
    </View>
  )
}