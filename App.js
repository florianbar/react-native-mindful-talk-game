import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { MINDFUL_TALK_CARDS } from './data/cards';
import Cards from './components/cards';
import Button from './components/button';

const COVER_CARD = {
  type: "cover",
  id: Math.random(),
};

export default function App() {
  const [selectedCard, setSelectedCard] = useState(COVER_CARD);

  function getRandomCard(type) {
    let questionType = type;

    if (!type) {
      const randomTypeIndex = Math.floor(Math.random() * Object.keys(MINDFUL_TALK_CARDS).length);
      questionType = Object.keys(MINDFUL_TALK_CARDS)[randomTypeIndex];
    }

    const randomQuestionIndex = Math.floor(Math.random() * MINDFUL_TALK_CARDS[questionType].length);
    const randomQuestion = MINDFUL_TALK_CARDS[questionType][randomQuestionIndex];

    return { 
      type: "question",
      id: Math.random(),
      type: questionType,
      question: randomQuestion
    };
  }

  function setCurrentAndNextCard() {
    setSelectedCard(getRandomCard());
  }

  return (
    <View style={styles.screen}>
      <View style={styles.main}>
        {selectedCard ? (
          <Cards newCard={selectedCard} />
        ) : (
          <Text style={styles.noCardSelectedText}>
            Press the button below to choose the first card
          </Text>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          {/* {Object.keys(MINDFUL_TALK_CARDS).map((type) => (
            <Button key={type} onPress={() => getRandomQuestion(type)}>
              {makeFirstLetterUppercase(type)}
            </Button>
          ))} */}
          <Button onPress={() => setCurrentAndNextCard()}>
              Next Card
            </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fd3fe',
  },
  main: {
    flex: 1,
    padding: 16,
    width: '100%',
  },
  footer: {
    padding: 16,
    width: '100%',
  },
  noCardSelectedText: {
    width: '75%',
    fontSize: 22,
    lineHeight: 34,
    textAlign: 'center',
    color: '#1262b3',
  },
  buttonContainer: {},
});
