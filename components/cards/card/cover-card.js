import { StyleSheet, Text, View } from 'react-native';

import CardContainer from './card-container';

export default function CoverCard({ index, isSlidingOut }) {
    return (
        <CardContainer 
            index={index} 
            isSlidingOut={isSlidingOut}
        >
            <View style={styles.body}>
                <Text style={styles.logo}>MINDFUL</Text>
                <Text>
                    <Text style={[styles.logo, styles.logoT]}>T</Text>
                    <Text style={[styles.logo, styles.logoA]}>A</Text>
                    <Text style={[styles.logo, styles.logoL]}>L</Text>
                    <Text style={[styles.logo, styles.logoK]}>K</Text>
                </Text>
            </View>
        </CardContainer>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#8fd3fe',
        borderRadius: 8,
    },
    logo: {
        fontSize: 50,
        lineHeight: 50,
        letterSpacing: -2,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    logoT: {
        color: 'green',
    },
    logoA: {
        color: '#45a2fe',
    },
    logoL: {
        color: 'purple',
    },
    logoK: {
        color: 'orange',
    },
});