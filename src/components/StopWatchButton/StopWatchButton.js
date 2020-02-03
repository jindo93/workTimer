import {Text, TouchableOpacity} from 'react-native';
import i18n from '../../i18n/i18n';
import React from 'react';
import moment from 'moment';
import StopWatchButtonStyles from './StopWatchButtonStyles';

const StopWatchButton = ({time, onPressStartAction, onPressTimerAction}) => {
    if (time > 0) {
        return (
            <TouchableOpacity
                style={StopWatchButtonStyles.mainActionButton}
                onPress={onPressTimerAction}>
                <Text style={StopWatchButtonStyles.mainActionButtonText}>
                    {moment.utc(time).format(i18n.TIME_FORMAT)}
                </Text>
                <Text
                    style={[
                        StopWatchButtonStyles.mainActionButtonText,
                        StopWatchButtonStyles.mainActionButtonPauseText
                    ]}>
                        {i18n.STOP_WATCH.PAUSE}
                </Text>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity
            style={StopWatchButtonStyles.mainActionButton}
            onPress={onPressStartAction}>
            <Text style={StopWatchButtonStyles.mainActionButtonText}>
                {i18n.STOP_WATCH.START}
            </Text>
        </TouchableOpacity>
    );
};

export default StopWatchButton;