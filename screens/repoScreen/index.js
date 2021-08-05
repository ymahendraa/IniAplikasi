import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RepoComponent from '../../components/repoComponent';

const RepoView = () => {
    const navigation = useNavigation();
    return(
        <View>
            <RepoComponent />
            
            <View style={{width:'65%',height: 60, backgroundColor:'#00a0a0', borderRadius: '20%', borderRadius: 30, position: 'absolute' ,bottom:70, justifyContent: 'space-around', flexDirection:'row', alignItems: 'center', alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('User')}>
                        <MaterialIcons name='people' size={35} color='#ffff' onPress={() => navigation.navigate('User')}></MaterialIcons>
                        <Text style={{color:'#ffff',textAlign:'center',fontFamily:'Questrial-Regular'}}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
                        <MaterialIcons name='list' size={35} color='#006666' onPress={() => navigation.navigate('Repositories')}></MaterialIcons>
                        <Text style={{color:'#006666',textAlign:'center',fontFamily:'Questrial-Regular'}}>Repo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Issues')}>
                        <MaterialIcons name='feedback'size={35} color='#ffff' onPress={() => navigation.navigate('Issues')}></MaterialIcons>
                        <Text style={{color:'#ffff',textAlign:'center',fontFamily:'Questrial-Regular'}}>Issues</Text>
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