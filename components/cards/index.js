

import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ANIM_DURATION } from './constants';
import Card, { styles as cardStyles } from './card';

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
            <View style={styles.cardsBase} />
        </View>
    );
}

const styles = StyleSheet.create({
    cards: {
        flex: 1,
        position: 'relative',       
    },
    cardsBase: {
        ...cardStyles.card,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
    },
});