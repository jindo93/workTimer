import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
    }

    renderStartButton() {
        return (
            <TouchableOpacity
                        style={HomeViewStyles.mainActionButton}
                        onPress={() => {
                            setInterval(() => {
                                this.setState({
                                    time: this.state.time + 1000,
                                });
                            }, 1000);
                        }}>
                        <Text style={HomeViewStyles.mainActionButtonText}>
                            {i18n.HOME.START}
                        </Text>
                    </TouchableOpacity>
        );
    }

    renderRunningTimer() {
        return (
            <TouchableOpacity
                        style={HomeViewStyles.mainActionButton}
                        onPress={() => {
                            console.log('button pressed');
                        }}>
                        <Text style={HomeViewStyles.mainActionButtonText}>
                            00:00:00
                        </Text>
                    </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={[{ flex: 1 }, HomeViewStyles.HomeViewContainer]}>
                <View style={{ flex: 1 }}>
                    <Text style={HomeViewStyles.welcomeHeader}>
                        {i18n.HOME.WELCOME_HEADER}
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text>{this.state.time}</Text>
                    {this.renderStartButton()}
                </View>
            </View>
        );
    }
}

export default HomeView;