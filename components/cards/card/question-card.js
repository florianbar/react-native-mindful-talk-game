import { StyleSheet, Text, View } from 'react-native';

import CardContainer from './card-container';

export default function QuestionCard({ index, question, type, isSlidingOut }) {
    return (
        <CardContainer 
            index={index} 
            isSlidingOut={isSlidingOut}
        >
            <View style={styles.body}>
                <Text style={styles.question}>
                    {question}
                </Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.type}>
                    {type}
                </Text>
            </View>
        </CardContainer>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {},
    question: {
        fontSize: 22,
        lineHeight: 34,
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',
    },
    type: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
});