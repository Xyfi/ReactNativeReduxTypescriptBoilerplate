import * as React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";

import { countUpImmutable, ICountUpImmutable } from "../actions/actions-counter-immutable";
import { Button, Card, CardSection } from "../components";

interface IReduxCounterProps {
    count: number;
    countUpImmutable: ICountUpImmutable;
};

interface IReduxCounterState { };

class ReduxCounter extends React.Component<IReduxCounterProps, IReduxCounterState> {
    public render(): JSX.Element {
        const { count } = this.props;
        const {
            counterStyle
        } = styles;
        console.log(count);
        return (
            <Card>
                <CardSection>
                    <Text style={counterStyle}>Redux/Immutable counter</Text>
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
        this.props.countUpImmutable();
    }
}

const styles = StyleSheet.create({
    counterStyle: {
        fontSize: 30,
        lineHeight: 40,
        textAlign: "center"
    } as TextStyle
});

const mapDispatchToProps = (state: App.State) => {
    return {
        count: state.counterImmutable.get("count")
    };
};

export default connect(mapDispatchToProps, {
    countUpImmutable
})(ReduxCounter);
