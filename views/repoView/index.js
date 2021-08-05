import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RepoView = () => {
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.welcomeText}>Repo Page</Text>

            
            <View style={{width:'65%',height: 60, backgroundColor:'#ffff', borderRadius: '20%', borderRadius: 30, position: 'absolute' ,bottom:-700, justifyContent: 'space-around', flexDirection:'row', alignItems: 'center', alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('User')}>
                        <MaterialIcons name='people' size={35} color='grey' onPress={() => navigation.navigate('User')}></MaterialIcons>
                        <Text style={styles.navText}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
                        <MaterialIcons name='list' size={35} backgroundColor='#C4E0A4' color='teal' onPress={() => navigation.navigate('Repositories')}></MaterialIcons>
                        <Text style={styles.navText}>Repo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Issues')}>
                        <MaterialIcons name='feedback'size={35} backgroundColor='#C4E0A4' color='grey' onPress={() => navigation.navigate('Issues')}></MaterialIcons>
                        <Text style={styles.navText}>Issues</Text>
                    </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeText : {
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        top:250,
        marginHorizontal: '25%'
    },
    navText: {
        textAlign:'center',
    }
});

export default RepoView;