import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

export default function Button({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#45cdfe" }} // android only
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedButton]
            : styles.buttonInnerContainer
        } // cross-platform
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 100,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#45a2fe",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  pressedButton: {
    ...Platform.select({
      ios: {
        opacity: 0.75,
      },
    }),
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
