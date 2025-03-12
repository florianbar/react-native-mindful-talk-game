

import { useEffect } from 'react';
import { StyleSheet, Animated, useAnimatedValue } from 'react-native';

import { ANIM_DURATION, CARD_WIDTH, CARD_HEIGHT } from '../constants';

export default function CardContainer({ children, isSlidingOut, index }) {
    const slideAnim = useAnimatedValue(-(CARD_WIDTH/2));

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
            {children}
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
});