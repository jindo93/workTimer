import React from 'react';
import { Text, View, AppState } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopWatchButton/StopWatchButton';
import AsyncStorage from '@react-native-community/async-storage';

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    async handleAppStateChange(nextAppState) {
        console.log('nextAppState', nextAppState);

        const now = new Date().getTime();
        const {time} = this.state;

        const readTime = parseInt(await AsyncStorage.getItem('@time'));
        const readStateChangeTimestamp = parseInt(
            await AsyncStorage.getItem('@appStateChangedTimestamp')
        );
        console.log('stored data', readStateChangeTimestamp, readTime);
        
        const timeDifference = now - readStateChangeTimestamp;
        const newTime = readTime + timeDifference;
        console.log('new time', newTime);

        if (nextAppState === 'active') {
            this.setState({
                time: newTime
            },
            //this.startTimer,
            );
        }

        await AsyncStorage.setItem('@time', String(time));
        await AsyncStorage.setItem('@appStateChangedTimestamp', String(now));
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    startTimer() {
        setInterval(() => {
            const { time, paused } = this.state;
            if (!paused) {
                this.setState({
                    time: time + 1000,
                });
            }
        }, 1000);
    }

    pauseTimer() {
        const { paused } = this.state;
        this.setState({
            paused: !paused
        });
    }
    
    render() {
        const { time } = this.state;
        
        return (
            <View style={[{ flex: 1 }, HomeViewStyles.HomeViewContainer]}>
                <View style={{ flex: 1 }}>
                    <Text style={HomeViewStyles.welcomeHeader}>
                        {i18n.HOME.WELCOME_HEADER}
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <StopWatchButton 
                        time={time}
                        onPressStartAction={this.startTimer}
                        onPressTimerAction={this.pauseTimer}
                    />
                </View>
            </View>
        );
    }
}

export default HomeView;