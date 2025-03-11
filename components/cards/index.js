

import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ANIM_DURATION, CARD_WIDTH, CARD_HEIGHT } from './constants';
import Card from './card';

export default function Cards({ newCard }) {
    const [cardList, setCardList] = useState([]);

    // Add new card to list
    useEffect(() => {
        if (cardList.length > 1) return;

        setCardList((previousCardList) => ([...previousCardList, newCard]));
    }, [newCard]);

    // Remove first card from list if there are more than 1
    useEffect(() => {
        let timeout;

        if (cardList.length > 1) {
            timeout = setTimeout(() => {
                setCardList((previousCardList) => previousCardList.slice(1));
            }, ANIM_DURATION);
        }

        return () => clearTimeout(timeout);
    }, [cardList]);

    return (
        <View style={styles.cards}>
            <View style={styles.cardsBase} />
            {cardList.map((card, index) => {
                const isSlidingOut = index === 0 && cardList.length > 1;
                return (
                    <Card 
                        key={card.id}
                        index={index}
                        question={card.question} 
                        type={card.type} 
                        isSlidingOut={isSlidingOut}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    cards: {
        flex: 1,
        position: 'relative',       
    },
    cardsBase: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        transform: [
            { translateX: -(CARD_WIDTH/2) },
            { translateY: -(CARD_HEIGHT/2) }
        ],
        padding: 24,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 16,
    },
});