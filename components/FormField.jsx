import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className='text-gray-100 text-base font-pmedium'>{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          placeholder={placeholder}
          placeholderTextColor={'#8D8D8D'}
          value={value}
          secureTextEntry={title === 'Password' && !showPassword}
          onChangeText={handleChangeText}
            {...props}
        />

        {title === 'Password' && (<TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain' /></TouchableOpacity>)}
      </View>
    </View>
  )
}

export default FormField