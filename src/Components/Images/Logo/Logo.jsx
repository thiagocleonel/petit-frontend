import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";


export default props => {
  const styles = StyleSheet.create({
    logo: {
      width: "123px",
      height: "92px",
      display: "block",
      margin: "auto"
    }
  });

  return(
    <>
      <Image style={styles.logo} source={require('./logo.png')} />
    </>
  )
}
