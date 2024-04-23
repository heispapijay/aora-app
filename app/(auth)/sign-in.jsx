import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';


const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const submit = () => { }
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='my-6 px-4 w-full justify-center min-h-[85vh]'>
          <Image source={images.logo} className='w-[115px] h-[35px]' resizeMode='contain' />

          <Text className="text-white text-2xl font-psemibold text-semibold mt-10 ">Log in to Aora</Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-6'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-6'
          />
          <CustomButton title='Sign in'
            handlePress={submit}
            containerStyles='mt-6'
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn