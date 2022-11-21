import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Logo from '../Images/Logo/Logo'
import Email from '../Inputs/Email/Email'
import Password from '../Inputs/Password/Password'
import Recover from '../Buttons/Recover/Recover'
import Login from '../Buttons/Login/Login'
import LoginAPI from '../Buttons/Login/LoginAPI'
import Signup from '../Buttons/Signup/Signup'
import { Button } from "@react-native-material/core";
import {login, signup} from '../../services/UserService'


export default props => {
  const styles = StyleSheet.create({
    view: {
      display: "flex"
    }
  });

  return(
    <View >
      <Logo></Logo>  
      <Email></Email>
      <Password></Password>
      <Recover></Recover>
      <LoginAPI></LoginAPI>
      <Signup></Signup>
      <Login></Login>
      {/* <Button title="Enviar" onPress={login}> </Button> */}
    </View>
  )
}
