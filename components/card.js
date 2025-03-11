import { StyleSheet, Text, View } from 'react-native';

export default function Card({ type, question }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <Text style={styles.cardQuestion}>{question}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.cardType}>{type}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: '100%',
        maxHeight: 400,
        maxWidth: 320,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
    },
    cardBody: {
        flex: 1,
        justifyContent: 'center',
    },
    cardFooter: {
      
    },
    cardQuestion: {
        fontSize: 22,
        lineHeight: 34,
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',
    },
    cardType: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});