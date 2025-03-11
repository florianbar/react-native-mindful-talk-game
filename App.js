import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MINDFUL_TALK_CARDS } from './data/cards';
import Card from './components/card';
import Button from './components/button';


export default function App() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  function getRandomQuestion(type) {
    let questionType = type;

    if (!type) {
      const randomTypeIndex = Math.floor(Math.random() * Object.keys(MINDFUL_TALK_CARDS).length);
      questionType = Object.keys(MINDFUL_TALK_CARDS)[randomTypeIndex];
    }

    const randomQuestionIndex = Math.floor(Math.random() * MINDFUL_TALK_CARDS[questionType].length);
    const randomQuestion = MINDFUL_TALK_CARDS[questionType][randomQuestionIndex];

    setSelectedType(questionType);
    setSelectedQuestion(randomQuestion);
  }

  function makeFirstLetterUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.main}>
        {selectedType && selectedQuestion && (
          <Card 
            type={makeFirstLetterUppercase(selectedType)} 
            question={selectedQuestion} 
          />
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          {/* {Object.keys(MINDFUL_TALK_CARDS).map((type) => (
            <Button key={type} onPress={() => getRandomQuestion(type)}>
              {makeFirstLetterUppercase(type)}
            </Button>
          ))} */}
          <Button onPress={() => getRandomQuestion()}>
              Choose a Card
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: '100%',
  },
  footer: {
    padding: 4,
    width: '100%',
  },
  buttonContainer: {},
});
