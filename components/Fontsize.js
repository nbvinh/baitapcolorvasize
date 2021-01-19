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

const Fontsize = (props) => {
    const size = props.size;
    const Up = () => {
        if (size < 50) {

            handleChooseSize(size - 1);
        }
    }
    const reset = () => {
        setSize(0)
    }
    const Down = () => {
        if (size > 0) {

            handleChooseSize(size + 1);
        }
    }

    const handleChooseSize = props.handleChooseSize;
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
                <Text style={styles.textsize}>FontSize</Text>
            </LinearGradient>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.size}>
                    <Text style={styles.textheader}>Size :</Text>
                    <View style={styles.textcontent}>
                        <Text style={[styles.fontSize, { marginLeft: 5 }]}>{size} </Text>
                        <Text style={[styles.fontSize, {marginLeft:70 }]}>(px) </Text>
                    </View>
 
                </View>
                <View style={styles.touchable}>

                    
                    <View style={styles.downup}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={Up}>
                            <Text style={styles.text}>Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.downup}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={Down}>
                            <Text style={styles.text}>Down</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    textcontent: {
        backgroundColor: '#F3F3F3',
        flexDirection:'row',
        borderRadius:5,
        flex:1,
    },
    fontSize: {
        fontSize: 15
    },
    size: {
        marginLeft:5,
        marginTop:7,
        marginRight:5,
        flex: 1,
        flexDirection: 'row',
    },
    touchable: {
        marginLeft: 5,
        marginTop:15,
        marginBottom:20,
        marginRight:5,
        flex: 1,
        flexDirection: 'row',

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
    textsize: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,

    },
    downup: {
        backgroundColor: '#BD2B26',
        width: 72, borderRadius: 24,
        height: 28,
        flex: 1,
        marginHorizontal: 5
    },
    textheader: {
        marginHorizontal: 5,
        overflow:'hidden'
    }
});

export default Fontsize;
