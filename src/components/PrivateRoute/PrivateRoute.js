import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function PrivateRoute({ children }) {
    const [loading, setLoading] = React.useState(true);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const navigation = useNavigation();

    React.useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                setIsAuthenticated(true);
            } else {
                navigation.navigate('Login');
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return isAuthenticated ? children : null;
}
