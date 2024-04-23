import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full px-4 justify-center items-center min-h-[85vh]">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
           />
           <Image 
            source={images.cards}
            className="w-full h-[300px] max-w-[300px]"
            resizeMode='contain'
           />

           <View className="relative mt-5">
            <Text className="font-bold text-center text-3xl text-white">
              Discover Endless{"\n"} Possibilities with{" "} <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 w-[136px] h-[15px] -right-9"
              resizeMode='contain'
             />
           </View>

           <Text className="mt-7 font-pregular text-sm text-gray-100 text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

           <CustomButton
           title="Continue with Email"
           handlePress={() => router.push('/sign-in')}
           containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}


