import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/FontAwesome';
import AddPhoto from './screens/AddPhoto';
import Feed from './screens/Feed';
import Profile from './screens/Profile';


const Tab = createBottomTabNavigator();



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
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}



 