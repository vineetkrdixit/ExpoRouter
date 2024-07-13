import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { useGetAllProductsQuery } from '@/api/getRequests';

const DrawerLayout = () => {
    const route = useRoute();
    const { session } = route.params;
    const sessionData = JSON.stringify(session);
    console.log(session, '=-=========');
    const { data, error, isLoading } = useGetAllProductsQuery('');
    console.log(
        data,
        '-------------------------------------------------------------',
        isLoading,
        error,
    );
    const CustomDrawerComponent = () => {
        return (
            <>
                <DrawerItem
                    label={'home'}
                    onPress={() => router.push('/(drawer)/(tabs)')}
                />

                <DrawerItem
                    label={'profile'}
                    onPress={() =>
                        router.push({
                            pathname: '/(drawer)/(tabs)/profile',
                            params: sessionData,
                        })
                    }
                />
                <DrawerItem
                    label={'scrren outside tabs 1'}
                    onPress={() => router.push('/outside1')}
                />
                <DrawerItem
                    label={'scrren outside tabs 2'}
                    onPress={() => router.push('/outside2')}
                />
                <DrawerItem
                    label={'reel'}
                    onPress={() => router.push('/(drawer)/(tabs)/reel')}
                />
            </>
        );
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer drawerContent={() => <CustomDrawerComponent />}></Drawer>
        </GestureHandlerRootView>
    );
};

export default DrawerLayout;
