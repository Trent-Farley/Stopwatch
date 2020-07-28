import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import ListComponent from "./list.component";

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class StopwatchContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }
        this.lapArr = [];
        this.interval = null;
        this.toggle = false;
    }

    handleToggle(toggle) {
        this.setState(
            {
                start: toggle
            },
            () => this.handleStart(toggle)
        );
    };

    handleLap (min, sec, msec) {
        this.lapArr = [
            ...this.lapArr,
            {min, sec, msec}
        ]
    };

    handleStart(toggle){
        if (toggle) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset() {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,
            start: false
        });
        clearInterval(this.interval);
        this.lapArr = [];
    };


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.parent}>
                    <Text style={styles.child}>{'  '+ padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
                </View>
                
                <View style={styles.buttonParent}>
                    <TouchableHighlight style={styles.button} onPress={()=>{
                        if(this.toggle == false){
                            this.toggle = true;
                            this.handleToggle(true);
                        } else{
                            this.toggle = false;
                            this.handleToggle(false);
                        }
                        }} underlayColor="#d9f7f7" >
                            <Text style={styles.buttonText}>
                                {!this.state.start? 'Start': 'Stop'}
                            </Text>
                        </TouchableHighlight>
                    <TouchableHighlight style={styles.button} 
                    onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.msec)}
                    disabled={!this.state.start} underlayColor="#d9f7f7" >
                        <Text style={styles.buttonText}>
                            Lap
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={()=>{this.handleReset()}}
                    underlayColor="#d9f7f7" > 
                        <Text style={styles.buttonText}>
                            Reset
                        </Text>
                    </TouchableHighlight>
                </View>       
                <ListComponent lap={this.lapArr} />  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 80,
        borderColor: "#694966",
        backgroundColor: 'lightblue',
        padding: "3%",
        maxWidth: "100%"
    },
    child: {
      fontSize: 36,
      color: "#000",
    },
    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "1%",
    },
    button: {
        backgroundColor: "#eeeeaf",
        padding: "2%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#694966",
        height: 60,
    },
    buttonText: {
        color: "#051A",
        fontSize: 20,
        alignSelf: "center"
    }
});

export default StopwatchContainer;