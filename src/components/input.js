import React from "react";
import { TextInput, View } from "react-native";

const Input = React.forwardRef(({placeholder,blurOnSubmit, onSubmitEditing},ref) => {
  return(
    <View>
      <TextInput ref={ref} placeholder={placeholder}  blurOnSubmit={blurOnSubmit} 
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  )
})


export default Input;