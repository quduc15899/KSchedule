import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Header from './Header';
import getData from '../../../api/getData';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            scheduleSuccess: null,
        };

    }

    items() {
        const { dataHandle } = this.props;
        if (dataHandle == null) {
            Alert.alert('Error', 'No data found ');
        } else {
            return dataHandle;
        }
    }
    loadItems = (day) => {
        this.setState({ selectedDate: day });
    };

    renderItem = (item) => {
        return (
            <View style={[styles.item]}>
                <View>
                    <View style={styles.itemRow}>
                        <Text style={styles.title}>Phòng:</Text>
                        <Text style={styles.text}>{item.address}</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Text style={styles.title}>Môn:</Text>
                        <Text style={styles.text}>{item.subject_name}</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Text style={styles.title}>Tiết: </Text>
                        <Text style={styles.text}>{item.lesson}</Text>
                    </View>
                </View>
            </View>
        );
    };

    renderEmptyData = () => {
        return (
            <View style={styles.emptyDate}></View>
        );
    };

    rowHasChanged = (r1, r2) => {
        return (r1.day !== r2.day || r1.location !== r2.location || r1.name !== r2.name || r1.user !== r2.user);
    };
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <Agenda
                    items={this.items()}
                    pastScrollRange={12}
                    futureScrollRange={12}
                    loadItemsForMonth={this.loadItems}
                    renderItem={this.renderItem}
                    renderEmptyData={this.renderEmptyData}
                    rowHasChanged={this.rowHasChanged}
                />
            </View>
        );
    }



}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
        marginTop: 17
    },
    itemRow: {
        flexDirection: 'row',
        margin: 5
    },
    title: {
        fontFamily: 'Avenir',
        color: '#68c2e8'
    },
    text: {
        marginLeft: 5,
        fontFamily: 'Avenir',
        fontSize: 15
    },
    emptyDate: {
        marginTop: 45,
        marginRight: 10,
        borderTopWidth: 2,
        borderTopColor: '#dddddd',
        height: 5,
    },
});
export default Home;