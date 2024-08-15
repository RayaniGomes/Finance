import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { cores } from '../Cores';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={style.container}>
            <View style={style.content}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <LinearGradient
                                colors={isFocused ? [cores.pink, cores.laranja] : [cores.azulMedio, cores.azulMedio]}
                                style={style.gradienteButton}
                            >
                                <Icon
                                    name={options.tabBarIcon}
                                    type="material"
                                    size={30}
                                    color={cores.branco}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
