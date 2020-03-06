import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import Axios from 'axios';
import { saveAnswers } from '../store/action';

export default function Question(props) {
    const selectQuestion = useSelector(state => state.questionReducer.selectQuestion)
    const answers = useSelector(state => state.questionReducer.answers)
    const dispatch = useDispatch();
    const checkUrl = () => {
        if(selectQuestion.url !== undefined) {
            Axios.get(`${selectQuestion.url}`)
            .then(res => dispatch( saveAnswers(res.data.answers) ))
            .then(error => console.log(error))
        } else {
            let answers = []
            dispatch( saveAnswers(answers) )
        }
    }
    useEffect(
        () => {
            checkUrl()
        }, []
    )

    return (
        <View style={styles.answer}>
            <Text style={styles.txt}>{selectQuestion.title}</Text>
            
            {answers.slice(0).reverse().map((item, index) => <TouchableOpacity style={styles.option} key={index}>
                <Text style={styles.txt}>{item.number}</Text>
                <Text style={styles.txt}>{item.answer}</Text>
            </TouchableOpacity>
            )}
        </View>
    );
}

