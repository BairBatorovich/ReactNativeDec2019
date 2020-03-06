import {SAVE_QUESTION, SELECT_QUESTION, AUTHORIZATION, ANSWERS} from './constant';

export const saveQuestion = (question) => {  
    return {
        type: SAVE_QUESTION,
        question
    } 
};

export const selectQuest = (selectQuestion) => {  
    console.log(selectQuestion)
    return {
        type: SELECT_QUESTION,
        selectQuestion
    } 
};

export const authorization = (authorization) => {  
    return {
        type: AUTHORIZATION,
        authorization
    } 
}

export const saveAnswers = (answers) => {  
    return {
        type: ANSWERS,
        answers
    } 
}