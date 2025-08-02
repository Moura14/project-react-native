import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSwitchNavigator } from 'react-navigation-switch';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPhoto from './screens/AddPhoto';
import Feed from './screens/Feed';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();
const Switch = createSwitchNavigator();

const AuthStack = createNativeStackNavigator()
const AuthRouter = createNativeStackNavigator()


function AuthRouters(){
  return (
    <AuthRouter.Navigator initialRouteName='Login'>
      <AuthRouter.Screen name='Login' component={Login} options={{title: 'Login'}}></AuthRouter.Screen>
      <AuthRouter.Screen name='Register' component={Register} options={{title: 'Registro'}}></AuthRouter.Screen>
    </AuthRouter.Navigator>
  )
}

function AuthOrProfileNavigator(){
  return (
    <AuthStack.Navigator initialRouteName='Profile' screenOptions={{headerShown: false}}>
      <AuthStack.Screen name='Login' component={AuthRouters}></AuthStack.Screen>
      <AuthStack.Screen name='Profile' component={Profile}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}



export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Feed') iconName = 'home';
          else if (route.name === 'AddPhoto') iconName = 'camera';
          else if (route.name === 'Profile') iconName = 'user';

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="AddPhoto" component={AddPhoto} />
      <Tab.Screen name="loginOrProfileRouter" component={AuthOrProfileNavigator} />
    </Tab.Navigator>
  );
}



 