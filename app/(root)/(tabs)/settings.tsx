import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert, StyleSheet } from 'react-native';
import React from 'react';
import icons from '@/constants/icons';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';

type SettingsItemProps = {
    icon: ImageSourcePropType,
    title: string,
    onPress: () => void,
    textStyle?: any,
    showArrow?: boolean
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => (
    <TouchableOpacity onPress={onPress} style={styles.settingsItem}>
        <View style={styles.settingsItemContent}>
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </View>
        {showArrow && (
            <Image source={icons.arrow} style={styles.arrow} />
        )}
    </TouchableOpacity>
);

const Settings = () => {
    const { user, refetch } = useGlobalContext();

    const handleLogout = async () => {
        const result = await logout();
        if (result) {
            Alert.alert('Success', 'Logged out successfully');
            refetch();
        } else {
            Alert.alert('Error', 'Logout failed');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Profile Settings</Text>
                    <Image 
                        source={icons.bell}
                        style={styles.bellIcon}
                    />
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profileContent}>
                        <Image 
                            source={{ uri: user?.avatar || 'https://via.placeholder.com/150' }} // Placeholder image
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editButton}>
                            <Image 
                                source={icons.edit}
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.userName}>
                            {user?.name}
                        </Text>
                    </View>
                </View>
                <View style={styles.settingsList}>
                    <SettingsItem 
                        icon={icons.logout}
                        title='Logout'
                        onPress={handleLogout}
                        textStyle={{ color: 'red' }}
                        showArrow={false} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        paddingBottom: 12,
        paddingHorizontal: 7,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
    bellIcon: {
        width: 40,
        height: 40,
        marginTop: 5,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    profileContent: {
        alignItems: 'center',
        marginTop: 5,
    },
    avatar: {
        width: 88,
        height: 88,
        borderRadius: 44,
    },
    editButton: {
        position: 'absolute',
        bottom: 11,
        right: 2,
        backgroundColor: 'black',
        padding: 2,
        borderRadius: '50%',
    },
    editIcon: {
        width: 24,
        height: 24,
    },
    userName: {
        fontSize: 24,
        marginTop: 3,
        fontWeight: 'bold',
    },
    settingsList: {
        marginTop: 20,
        paddingTop: 5,
        borderColor: 'green',
        borderTopWidth: 1,
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: 'green',
    },
    settingsItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    icon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    arrow: {
        width: 24,
        height: 24,
    },
});

export default Settings;