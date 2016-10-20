import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface IButtonProps extends React.Props<any> {
    onPress: () => void;
    activeOpacity?: number;
};

const Button = (props: IButtonProps) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity
            activeOpacity={typeof(props.activeOpacity) === "number" ? this.props.activeOpacity : 0.2}
            onPress={props.onPress}
            >
            <View style={buttonStyle}>
                <Text style={buttonTextStyle}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        borderColor: "#33D",
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 2,
        marginBottom: 2,
        marginRight: 5,
        marginLeft: 5
    } as ViewStyle,
    buttonTextStyle: {
        color: "#33D",
        textAlign: "center"
    } as TextStyle
});

export { Button };