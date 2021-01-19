import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

const TodoList = (props) => {
    const color = props.color;
    const size = props.size;
    const todos = props.todos;
    const handleTodosChange = props.handleTodosChange;
    const submitHandler = props.submitHandler;

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }



    return (
        <View>
            <View style={styles.nhap}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Enter todo here"
                    onChangeText={changeHandler}
                />
                <TouchableOpacity
                    style={styles.tou}
                    onPress={() => submitHandler(text)}
                >
                    <Text style={styles.text}
                    >Done</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <LinearGradient
                    style={styles.header}
                    colors={['#BD1313', '#FF8080']}
                >
                    <Text style={styles.textitem}>TodoList</Text>
                </LinearGradient>
                <View style={styles.flatlist}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.list}
                                onPress={() => {
                                    handleTodosChange(item);
                                }}
                            >
                                {
                                    !item.isChecked && (
                                        <FontAwesome name={"square-o"} size={20} style={styles.check} color='#BD1313' />
                                    ) || (
                                        <FontAwesome name={"check-square"} size={20} color='#BD1313' style={styles.check}/>
                                    )
                                }
                                <Text style={styles.textlist}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={styles.result}>
                <LinearGradient
                    style={styles.header}
                    colors={['#BD1313', '#FF8080']}
                >
                    <Text style={styles.textitem}>Result</Text>
                </LinearGradient>
                <View style={styles.textResult}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (

                            item.isChecked && (
                                    <Text style={{ color: color, fontSize: size }}>{item.text}</Text>
                                
                            )


                        )}
                    />
                </View>
            </View>
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
    textinput: {
        height: 40,
        backgroundColor: 'white', flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        borderRadius:5,
    },
    textResult: {
        margin: 20,

    },
    check: {
        marginTop: 4,
    },
    textlist: {
        fontSize: 18,
        marginLeft: 10,
    },
    list: {
        flexDirection: 'row',
    },
    flatlist: {
        margin: 20,
    },
    nhap: {
        flexDirection: 'row',
        marginLeft: 20,
        paddingRight: 20,
    },
    tou: {
        marginLeft: 10,
        height: 40,
        width: 74,
        backgroundColor: '#BD2B26',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    header: {
        height: 40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    textitem: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
    content: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    result: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    touchaResult: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BD2B26',
        borderRadius: 8,
        height: 48,
    }
});
export default TodoList;