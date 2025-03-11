

import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { ANIM_DURATION, CARD_WIDTH, CARD_HEIGHT } from './constants';

export default function Card({ index, question, type, isSlidingOut }) {
    const slideAnim = useRef(new Animated.Value(-(CARD_WIDTH/2))).current;

    const slideOut = () => {
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: ANIM_DURATION,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (isSlidingOut) {
            slideOut();
        }
    }, [isSlidingOut]);

    return (
        <Animated.View
            style={[
                styles.card,
                {
                    transform: [
                        { translateX: isSlidingOut ? slideAnim : -(CARD_WIDTH/2) },
                        { translateY: -(CARD_HEIGHT/2) }
                    ],
                    zIndex: 100 - index,
                }
            ]}
        >
            <View style={styles.cardBody}>
                <Text style={styles.cardQuestion}>
                    {question}
                </Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.cardType}>
                    {type}
                </Text>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.10,
        shadowRadius: 16,
    },
    cardBody: {
        flex: 1,
        justifyContent: 'center',
    },
    cardFooter: {},
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