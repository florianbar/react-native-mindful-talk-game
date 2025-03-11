import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Button({ children, onPress }) {
    return (
        <View style={styles.button}>
            <Pressable
                android_ripple={{ color: '#45cdfe' }} // android only
                style={({ pressed }) => pressed && styles.pressedButton} // cross-platform
                onPress={onPress}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#45a2fe',
        borderRadius: 100,
    },
    pressedButton: {
        opacity: 0.5,
    },
    text: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});