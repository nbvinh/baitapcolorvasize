/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Colorpicker from "../components/Colorpicker";
import Fontsize from "../components/Fontsize";
import TodoList from "../components/TodoList";

const Home = (props) => {

    const [activeObject, setActiveObject] = useState({ id: 3, color: '#001AFF' })
    const [color, setColor] = useState('#000');
    const [size, setSize] = useState(0);
    const [todos, setTodos] = useState([]);
    const handleChooseColor = (colorChoose) => {
        setActiveObject(colorChoose)
        setColor(colorChoose.color);
    }
    const handleChooseSize = (sizeChoose) => {
        setSize(sizeChoose);
    }
    const handleTodosChange = (item) => {
        let cloneTodos = todos;
        let cloneItem = cloneTodos.find((todoItem) => todoItem.key == item.key)
        if (cloneItem) {
            cloneItem.isChecked = !cloneItem.isChecked;
        }
        setTodos([...cloneTodos])
    }

    const submitHandler = (text) => {
        console.log(size);
        setTodos((prevTodos) => {
            return [
                { text: text, key: Math.random().toString(), color: color, size: size },
                ...prevTodos
            ]
        })
    }
    function onSubmit() {
        color == '' ? Alert.alert('Title', 'color k dc de trong') :
        size == '' ? Alert.alert('Title', 'size k dc de trong') :
        todos == '' ? Alert.alert('Title', 'text k dc de trong') :
        props.navigation.navigate('Submit', { color: color, size: size, todos: todos })
    }
    console.log(activeObject)
    return (
        <View style={{ flex: 1 }}>

            <View style={{height: 70, backgroundColor: 'white' }}>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row',flex:1,paddingTop:20,paddingBottom:20,paddingRight:12,paddingLeft:12 }}>
                    <Colorpicker handleChooseColor={handleChooseColor}
                        setActiveObject={setActiveObject}
                        activeObject={activeObject}

                    />
                    <Fontsize size={size} handleChooseSize={handleChooseSize} />
                </View>


                <TodoList size={size}
                    color={color}
                    todos={todos}
                    handleTodosChange={handleTodosChange}
                    submitHandler={submitHandler}
                />
                <View >
                    <TouchableOpacity
                        style={styles.submit}
                        onPress={() => { onSubmit() }}
                    >
                        <Text style={styles.textsubmit}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    textsubmit: {
        fontSize: 18,
        color: 'white',
    },
    submit: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BD2B26',
        height: 48,
        borderRadius: 24,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default Home;
