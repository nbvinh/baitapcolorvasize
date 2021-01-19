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
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Colorpicker = (props) => {
    const handleChooseColor = props.handleChooseColor;
    const dataColor = [
        { id: 1, color: '#FF0000' },
        { id: 2, color: '#05FF00' },
        { id: 3, color: '#001AFF' },
        { id: 4, color: '#00FFF0' },
    ]
    // console.log(props.activeObject)
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            marginHorizontal: 8
        }}>
            <LinearGradient
                style={styles.header}
                colors={['#BD1313', '#FF8080']}
            >
                <Text style={styles.textsize}>Color Picker</Text>
            </LinearGradient>
            <View style={styles.button}>
                {dataColor.map((item) => {
                    return (
                        <TouchableOpacity style={[styles.buttonTest, {
                            backgroundColor: item.color,
                            borderColor: props.activeObject.id == item.id ? '#000' : '#FFF',
                            borderWidth: 1,
                        }]}
                            onPress={() => handleChooseColor(item)} />
                    )
                })}
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    textsize: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },
    header: {
        height: 40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    button: {
        flexDirection: 'row',
        flex: 1
    },
    buttonTest: {
        height: 24,
        width: 20,
        margin: 10,
        flex: 1,
    },
});
export default Colorpicker;