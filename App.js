import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MINDFUL_TALK_CARDS } from './data/cards';
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
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Text style={styles.cardQuestion}>{selectedQuestion}</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardType}>{makeFirstLetterUppercase(selectedType)}</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          {/* {Object.keys(MINDFUL_TALK_CARDS).map((type) => (
            <Button key={type} onPress={() => getRandomQuestion(type)}>
              {makeFirstLetterUppercase(type)}
            </Button>
          ))} */}
          <Button 
            style={{ width: "100%" }}
            onPress={() => getRandomQuestion()}
          >
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
