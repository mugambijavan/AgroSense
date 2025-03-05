    import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native'
    import React from 'react'
    import icons from '@/constants/icons'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'

    type SettingsItemProps = {
        icon: ImageSourcePropType,
        title: string,
        onPress: () => void,
        textStyle?: any,
        showArrow?: boolean
    }

    const SettingsItem = ({icon, title, onPress, textStyle, showArrow = true}: SettingsItemProps) => (
        <TouchableOpacity onPress={onPress} className='flex flex-row justify-between items-center py-5 border-b border-green-200' >
            <View className='flex flex-row items-center gap-3'>
                <Image  source={icon} className='size=6' />
                <Text className='text-lg text-bold'>{title}</Text>
            </View>
            {showArrow && (
                <Image source={icons.arrow} className='size-6' />
            )}

        </TouchableOpacity>
    )

    const Settings = () => {
        const{user, refetch} = useGlobalContext();

        const handleLogout = async () => {
            const result = await logout();
            if (result) {
                Alert.alert('Success', 'Logged out successfully');
                refetch();
            }else{
                Alert.alert('Error', 'Logout failed');
            }
        }

    return (
        <SafeAreaView className='h-full bg-white'>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerClassName='pb-12 px-7'
                >
                    <View className='flex flex-row justify-between items-center mt-10'>
                        <Text className='text-3xl font-bold color-green '>Profile Settings</Text>
                        <Image 
                            source={icons.bell}
                            className='w-10 h-10 mt-5'
                        />
                    </View>
                    <View className='flex-row justify-center mt-5'>
                        <View className='flex flex-col items-center relative mt-5'>
                            <Image 
                            source={{uri: user?.avatar}}
                            className='size-44 relative rounded-full'

                            />
                            <TouchableOpacity className='absolute bottom-11 bg-black right-2 p-2 rounded-full'>
                                <Image 
                                source={icons.edit}
                                className='size-6'
                                />
                            </TouchableOpacity>

                            <Text className='text-2xl mt-3 font-bold'>
                                {user?.name}
                            </Text>

                        </View>
                    </View>
                    <View className='flex flex-col mt-20 pt-5 border-green-600'>
                        
                        <SettingsItem 
                            icon={icons.logout}
                            title='Logout'
                            onPress={handleLogout}
                            textStyle={{color: 'red'}}
                            showArrow={false} 
                        />
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
    }

    export default Settings