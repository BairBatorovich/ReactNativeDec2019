import * as React from 'react';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizationScreen from '../screens/Authorization';
import GeneralScreen from '../screens/General';
import QuestionScreen from '../screens/Question';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styleHeader = {
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold'
    },
    headerBackTitleStyle: {
        color: 'green',
    },
    headerLayoutPreset: 'center'
};

const Stack = createStackNavigator();

MyStack = (props) => {
    const authorization = useSelector(state => state.questionReducer.authorization)
    return (
        <Stack.Navigator initialRouteName='Authorization'>
            {!authorization ? <Stack.Screen
                name="Authorization"
                component={AuthorizationScreen}
                headerMode= "none"
                options={({ navigation, route }) => ({
                    headerShown: false
                })}
                /> :
                <Stack.Screen
                    name="General"
                    component={GeneralScreen}
                    options={({ navigation, route }) => ({
                        headerLeft: null,
                    })}
                />
            }


            <Stack.Screen
                name="Question"
                component={QuestionScreen}
            />
        </Stack.Navigator>
    );
}

export default MyContainer = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}