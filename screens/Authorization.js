import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { authorization } from '../store/action';
import VKLogin from 'react-native-vkontakte-login';

export default function Authorization(props) {
    const dispatch = useDispatch();
    const signin = () => {
        // props.navigation.navigate('General');
        dispatch(authorization(true))
    }
    const vklogin = async () => {
        console.log('123')
        VKLogin.initialize(7344988);
        const isLoggedIn = await VKLogin.isLoggedIn();
        const auth = await VKLogin.login(['friends', 'photos', 'email']);
        console.log(auth);
    }
    useEffect(
        () => {
            vklogin();
        },
        [])
    return (
        <View style={styles.authorization}>
            <Text style={styles.txt}>Авторизация</Text>
            <TouchableOpacity onPress={signin} style={styles.sigin}>
                <Text>Войти</Text>
            </TouchableOpacity>
        </View>
    );
}

