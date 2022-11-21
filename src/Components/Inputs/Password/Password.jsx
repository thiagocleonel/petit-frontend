import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput } from 'react-native-paper';

export default props => {

  // HTML
  const [value, setValue] = useState(props.value)
  const [placeholder, setPlaceholder] = useState(props.placeholder)
  const [type, setType] = useState(props.type)

  // MATERIAL
  const [variant, setVariant] = useState(props.variant)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return(
    <View>
      <TextInput 
        mode = {variant || "outlined"}
        required
        value = {value || ""}
        label = {"Senha"}
        placeholder = {placeholder || ""}
        type = {type || ""}
        onChange = {onChange}
      />
    </View>
  )

}
