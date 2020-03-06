import { SAVE_QUESTION, SELECT_QUESTION, AUTHORIZATION, ANSWERS } from './constant';

const defaultState = {
    question: [],
    selectQuestion: {},
    authorization: false,
    answers: []
}

const questionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_QUESTION:
            return {
                ...state,
                question: action.question
            }
        case SELECT_QUESTION:
            return {
                ...state,
                selectQuestion: action.selectQuestion
            }
        case AUTHORIZATION:
            return {
                ...state,
                authorization: action.authorization
            }
        case ANSWERS:
            return {
                ...state,
                answers: action.answers
            }
        default: {
            return state
        }
    }
}
export default questionReducer;