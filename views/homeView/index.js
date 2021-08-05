import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/FontAwesome5';


const Home = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text style={styles.welcomeText}>Welcome to iniAplikasi</Text>

            
                <View style={{width:'65%',height: 60, backgroundColor:'#ffff', borderRadius: '20%', borderRadius: 30, position: 'absolute' ,bottom:-700, justifyContent: 'space-around', flexDirection:'row', alignItems: 'center', alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('User')}>
                        <MaterialIcons name='people' size={35} color='grey' onPress={() => navigation.navigate('User')}></MaterialIcons>
                        <Text style={styles.navText}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
                        <MaterialIcons name='list' size={35} backgroundColor='#C4E0A4' color='grey' onPress={() => navigation.navigate('Repositories')}></MaterialIcons>
                        <Text style={styles.navText}>Repo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Issues')}>
                        <MaterialIcons name='feedback'size={35} backgroundColor='#C4E0A4' color='grey' onPress={() => navigation.navigate('Issues')}></MaterialIcons>
                        <Text style={styles.navText}>Issues</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    welcomeText : {
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        top:250,
        marginHorizontal: '25%'
    },
    navText: {
        textAlign:'center'
    }
});

export default Home;