import { supabase } from '@/supabase';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, TextInput } from 'react-native';
import { AppState } from 'react-native';
import { StyleSheet, View } from 'react-native';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error, data } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (data?.session?.access_token) {
            router.replace('(drawer)');
        }
        console.log(data, '=-=====');

        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    async function signUpWithEmail() {
        setLoading(true);
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        if (!session)
            Alert.alert('Please check your inbox for email verification!');
        setLoading(false);
    }

    return (
        // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <TextInput
                    // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <TextInput
                    // label="Password"
                    // leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title="Sign in"
                    disabled={loading}
                    onPress={() => signInWithEmail()}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Button
                    title="Sign up"
                    disabled={loading}
                    onPress={() => signUpWithEmail()}
                />
            </View>
        </View>
        // </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
});
