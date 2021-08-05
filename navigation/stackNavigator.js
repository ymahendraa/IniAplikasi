import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/homeScreen';
import User from '../screens/userScreen';
import Repo from '../screens/repoScreen';
import Issue from '../screens/issueScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="User"
                component={User}
                options={{title: 'Users', headerTitleStyle:{color:'#ffff', fontWeight:'bold'}, headerStyle: {backgroundColor: '#00a0a0'},headerTintColor: '#ffff'}}
            />
            <Stack.Screen
                name="Repositories"
                component={Repo}
                options={{title: 'Repositories', headerTitleStyle:{color:'#ffff', fontWeight:'bold'}, headerStyle: {backgroundColor: '#00a0a0'},headerTintColor: '#ffff'}}
            />
            <Stack.Screen
                name="Issues"
                component={Issue}
                options={{title: 'Issues', headerTitleStyle:{color:'#ffff', fontWeight:'bold'}, headerStyle: {backgroundColor: '#00a0a0'},headerTintColor: '#ffff'}}
            />
        </Stack.Navigator>
    )
}

export default AppStack;
// import 'react-native-gesture-handler';
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Home from '../views/homeView';
// import User from '../views/userView';
// import Repo from '../views/repoView';
// import Issue from '../views/issueView';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const AppStack = () => {
//     return (
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen
//             name = "Home"
//             component = {Home}
//           />
//           <Stack.Screen
//             name = "Users"
//             component = {User}
//           />
//           <Stack.Screen
//             name = "Repositories"
//             component = {Repo}
//           />
//           <Stack.Screen
//             name = "Issues"
//             component = {Issue}
//           />
//         </Stack.Navigator>
//         // <NavigationContainer>
//         //     <Tab.Navigator
//         //         screenOptions={({ route }) => ({
//         //         tabBarIcon: ({ focused, color, size }) => {
//         //           let iconName;
      
//         //           if (route.name === 'User') {
//         //             iconName = focused ? 'person' : 'person_outline';
//         //           } 
//         //           else if (route.name === 'Repositories') {
//         //             iconName = focused ? 'library_books' : 'library_books';
//         //           }
//         //           else if (route.name === 'Issue') {
//         //             iconName = focused ? 'priority_high' : 'priority_high';
//         //           }
      
//         //           // You can return any component that you like here!
//         //           return <MaterialIcons name={iconName} size={size} color={color} />;
//         //         },
//         //         tabBarActiveTintColor: 'cyan',
//         //         tabBarInactiveTintColor: 'gray',
//         //       })}>
//         //         {/* <Tab.Screen 
//         //             name = "home"
//         //             component = {Home}
//         //         /> */}
//         //         <Tab.Screen 
//         //             name = "User"
//         //             component = {User}
//         //         />
//         //         <Tab.Screen 
//         //             name = "Repositories"
//         //             component = {Repo}
//         //         />
//         //         <Tab.Screen 
//         //             name = "Issue"
//         //             component = {Issue}
//         //         />
//         //     </Tab.Navigator>
//         // </NavigationContainer>
        
//     )
// }

// export default AppStack;