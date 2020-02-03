import {StyleSheet} from 'react-native';

const HomeViewStyles = StyleSheet.create({

    HomeViewContainer: {
        alignItems: 'center'
    },
    
    welcomeHeader: {
        marginTop:50,
        textAlign: 'center',
        fontSize: 40,
        color: '#000'
    },

    mainActionButton: {
        width: 284,
        height: 284,
        borderRadius: 142,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E'
    },

    mainActionButtonText: {
        fontSize: 60,
        color: '#FFF',
        fontWeight: 'bold'
    }

});

export default HomeViewStyles;