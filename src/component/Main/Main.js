import React, {Component} from 'react';
import { View} from 'react-native';
import Drawer from 'react-native-drawer'

import Menu from './Menu';
import Home from './Home/Home';


export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataInput:this.props.screenProps.data,
            dataHandle:null
        }
    }
    convertDate(day) {
        var today = new Date(day);
        var month = today.getMonth() + 1;
        var date = today.getDate();
        if (date < 10) { date = '0' + date }
        if (month < 10) { month = '0' + month }
        var year = today.getFullYear();

        return year + "-" + month + "-" + date;
    };
    componentDidMount(){
        var obj = {};
        const { dataInput } = this.state;
        dataInput.map(e => {
            var addItem = { [this.convertDate(e.date)]: e.lesson_list };
            obj = Object.assign(addItem, obj);
        })
        this.setState({ dataHandle: obj });
    }
    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }
    render(){
        const { navigation } = this.props;
        const {dataHandle} = this.state;
        return(
            <View style={{ flex: 1 }}>
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigation={navigation}/>}
                tapToClose
                negotiatePan={true}
                openDrawerOffset={0.4}
            >
                <Home dataHandle={dataHandle}  open={this.openControlPanel.bind(this)} />
            </Drawer>
            </View>
            
        );
    }
};