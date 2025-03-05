import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {

    const {refetch, loading, isLoggedIn} = useGlobalContext();
    if(!loading && isLoggedIn) return <Redirect href='/' />

    const handleLogin = async () => {
        const result = await login();
            if(result){
                refetch();
            }else {
                Alert.alert('Error','Login Failed')
            }
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image 
                    source={require('../assets/images/agrosenseailogo1.jpeg')}
                    className='h-80 w-80'
                    resizeMode='contain'
                />
                <View className='px-10'>
                    <Text className='text-4xl text-center text-green-800'>Grow Smarter. Harvest More</Text>
                    <Text className='text-lg mt-12 text-center '>Login with Microsoft</Text>
                    <TouchableOpacity onPress={handleLogin} className='bg-green-800 p-4 mt-8 shadow-md shadow-zinc-300 rounded-full w-full py-4 '>
                        <View className="flex flex-row items-center justify-center">
                            <Image 
                                source={require('../assets/images/microsoft.png')}
                                className='h-6 w-6'
                                resizeMode='contain'

                            />
                            <Text className='text-white ml-2 text-lg '>Sign in with Microsoft</Text>
                        </View>
                    </TouchableOpacity>
                    <Text className='text-lg mt-12 text-center '>Login with Google</Text>
                    <TouchableOpacity onPress={handleLogin} className='bg-green-800 p-4 mt-8  shadow-md shadow-zinc-300 rounded-full w-full py-4 '>
                        <View className="flex flex-row items-center justify-center">
                            <Image 
                                source={require('../assets/images/google.png')}
                                className='h-6 w-6'
                                resizeMode='contain'

                            />
                            <Text className='text-white ml-2 text-lg '>Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn