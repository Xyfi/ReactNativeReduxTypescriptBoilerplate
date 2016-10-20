import * as React from "react";
import { View, ViewStyle, Props } from "react-native";

interface ICardProps extends Props<any> {
    style?: ViewStyle;
}

const Card = (props: ICardProps) => {
    const containerStyle = props.style ? Object.assign(styles.containerStyle, props.style) : styles.containerStyle;
    return (
        <View style={containerStyle} key={props.key} ref={props.ref}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: "stretch",
        justifyContent: "center"
    } as ViewStyle
}

export { Card };
