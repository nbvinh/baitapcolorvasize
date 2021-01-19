import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome from "react-native-vector-icons/FontAwesome";
const Submit = (props) => {

    return (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
            <StatusBar backgroundColor='#BD2B26' barStyle="light-content" />
            <Image source={require('../images/right1.png')} style={{width:200,height:200}} />
            {/* <View style={{
                borderWidth: 4,
                borderRadius: 70,
                borderColor: '#BD1313',
                width: 130,
                height: 130,
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Icon name='check' size={100} color='#BD1313' />
            </View> */}
            <Text style={{ margin: 40, fontSize: 20, lineHeight: 19, textAlign: 'center' }}>You have successfully fixed the color and font size.</Text>
            <View >
                <TouchableOpacity
                    style={styles.submit}
                    onPress={() => { props.navigation.navigate('Item', {color: props.route.params.color, size: props.route.params.size, todos: props.route.params.todos}) }}
                >
                    <Text style={styles.textsubmit}>View Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textsubmit: {
        fontSize: 18,
        color: 'white',
    },
    submit: {
        width:343,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BD2B26',
        height: 48,
        borderRadius: 24,
    },
})
export default Submit;