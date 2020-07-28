import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView} from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class ListComponent extends Component {
    render() {
        return (
            <SafeAreaView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item, index}) => <Text key={index.toString()} style={styles.item}>{`#${index+1}            `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        maxHeight: "75%",
        backgroundColor: "#F5F5F5",
    },

    item: {
        padding: 0,
        fontSize: 20,
        color: "#5C415D",
        textAlign: "center",
        backgroundColor: "#fff",
        marginBottom: 2
    },
})


export default ListComponent;