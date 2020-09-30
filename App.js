import React, { Component } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import Spin from './Spin.js';

export default class App extends Component {
    render() {
        return (
        <AppearanceProvider>
            <Spin />
        </AppearanceProvider>
        );
    }
};