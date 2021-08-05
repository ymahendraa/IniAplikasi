import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/FontAwesome5';


const Home = () => {
    const navigation = useNavigation();
    // const image = require('../../assets/images/home.png')
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/splash_logo.png')} resizeMode="center" style={styles.image}>
            </ImageBackground>

            <Text style={styles.welcomeText}>Selamat Datang di</Text>
                <View style={{width:'65%',height: 60, backgroundColor:'#00a0a0', borderRadius: '20%', borderRadius: 30, position: 'absolute' ,bottom:70, justifyContent: 'space-around', flexDirection:'row', alignItems: 'center', alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('User')}>
                        <MaterialIcons name='people' size={35} color='#ffff' onPress={() => navigation.navigate('User')}></MaterialIcons>
                        <Text style={{color:'#ffff',textAlign:'center',fontFamily:'Questrial-Regular'}}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
                        <MaterialIcons name='list' size={35} color='#ffff' onPress={() => navigation.navigate('Repositories')}></MaterialIcons>
                        <Text style={{color:'#ffff',textAlign:'center',fontFamily:'Questrial-Regular'}}>Repo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Issues')}>
                        <MaterialIcons name='feedback'size={35} color='#ffff' onPress={() => navigation.navigate('Issues')}></MaterialIcons>
                        <Text style={{color:'#ffff',textAlign:'center',fontFamily:'Questrial-Regular'}}>Issues</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeText : {
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        top:200,
        marginHorizontal: '25%',
        color:'#006666',
        fontFamily:'Acme-Regular'
    },
    navText: {
        textAlign:'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});

export default Home;