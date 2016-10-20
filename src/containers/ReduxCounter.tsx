import * as React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";

import { countUp, ICountUp } from "../actions/actions-counter";
import { Button, Card, CardSection } from "../components";

interface IReduxCounterProps {
    count: number;
    countUp: ICountUp;
};

interface IReduxCounterState { };

class ReduxCounter extends React.Component<IReduxCounterProps, IReduxCounterState> {
    public render(): JSX.Element {
        const { count } = this.props;
        const {
            counterStyle
        } = styles;
        return (
            <Card>
                <CardSection>
                    <Text style={counterStyle}>Redux counter</Text>
                </CardSection>
                <CardSection>
                    <Text style={counterStyle}>{count}</Text>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onPressCountUp.bind(this)}
                        >
                        Count up!
                    </Button>
                </CardSection>
            </Card>
        );
    }

    public onPressCountUp(event: TouchableOpacity) {
        this.props.countUp();
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 40,
        textAlign: "center"
    } as TextStyle,
    counterStyle: {
        fontSize: 30,
        lineHeight: 40,
        textAlign: "center"
    } as TextStyle
});

const mapDispatchToProps = (state: App.State) => {
    return {
        count: state.counter.count
    };
};

export default connect(mapDispatchToProps, {
    countUp
})(ReduxCounter);
