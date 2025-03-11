import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Button({ children, onPress, style }) {
    return (
        <View style={styles.button}>
            <Pressable
                android_ripple={{ color: '#45cdfe' }}
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#45cdfe'
                            : '#45a2fe',
                    },
                    {
                     ...styles.button,
                     ...style
                    }
                ]}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});