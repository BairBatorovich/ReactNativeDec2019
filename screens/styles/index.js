import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    authorization: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sigin: {
        width: WIDTH - 60,
        height: 40,
        backgroundColor: '#41fca0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    btnblock: {
        width: WIDTH,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: "absolute",
        marginTop: HEIGHT - 130,
    },
    btn: {
        width: WIDTH / 2 - 20,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#2ca66a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSelect: {
        width: WIDTH / 2 - 20,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#41fca0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    listquestion: {
        width: WIDTH,
        height: HEIGHT - 135,
    },
    question: {
        marginTop: 10,
        width: WIDTH - 20,
        height: 80,
        borderRadius: 5,
        backgroundColor: '#c2c2c2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 16,
    },
    answer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: HEIGHT,
        width: WIDTH,
        paddingTop: 10,
    },
    option: {
        width: WIDTH - 20,
        height: 40,
        backgroundColor: '#c2c2c2',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
});

export default styles;