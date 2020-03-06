import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import styles from './styles';
import { saveQuestion, authorization, selectQuest } from '../store/action';

export default function General(props) {
    const [selBtnList, setselBtnList] = useState(true);
    const [selBtnExit, setselBtnExit] = useState(false);
    const dispatch = useDispatch();
    const question = useSelector(state => state.questionReducer.question);

    const sortquestion = (q) => {
        let quesUrl = [];
        let noUrl = [];
        for(let i = 0; i < q.length; i++) {
            if(q[i].url !== undefined) {
                quesUrl.push(q[i])
            } else {
                noUrl.push(q[i])
            }
        }
        let m = quesUrl.concat(noUrl)
        dispatch(saveQuestion(m))
    }

    const listquestion = () => {
        // Axios.get('https://api.myjson.com/bins/8561o')
        //     .then(res => dispatch(saveQuestion(res.data)))
        //     .then(error => console.log(error));
        Axios.get('https://api.myjson.com/bins/8561o')
            .then(res => sortquestion(res.data))
            .then(error => console.log(error));
        setselBtnList(false);
    }
    const exit = () => {
        dispatch(authorization(false))
    }

    const goquestion = (x) => {
        dispatch(selectQuest(x));
        props.navigation.navigate('Question');
    }

    return (
        <View>
            {
            question.length > 0 ? <View style={styles.listquestion}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    {question.map((quest, index) => <TouchableOpacity style={styles.question} key={index} onPress={() =>goquestion(quest)}>
                        <Text style={styles.txt}>{quest.title}</Text>
                    </TouchableOpacity>)}
                </ScrollView>
            </View> : <Text>Нажмите список вопросов</Text>
            }

            <View style={styles.btnblock}>
                <TouchableOpacity style={selBtnList ? styles.btnSelect : styles.btn} onPress={listquestion}>
                    <Text>Список вопросов</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selBtnExit ? styles.btnSelect : styles.btn} onPress={exit}>
                    <Text>Выход</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

