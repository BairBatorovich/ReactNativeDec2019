import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { authorization } from '../store/action';

export default function Authorization(props) {
    const dispatch = useDispatch();
    const signin = () => {
        dispatch(authorization(true))
    }

    return (
        <View style={styles.authorization}>
            <Text style={styles.txt}>Авторизация</Text>
            <TouchableOpacity onPress={signin} style={styles.sigin}>
                <Text>Войти</Text>
            </TouchableOpacity>
        </View>
    );
}

