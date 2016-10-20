import * as React from "react";
import { View, ViewStyle, Props } from "react-native";

interface ICardSectionProps extends Props<any> {
    style?: ViewStyle;
}

const CardSection = (props: ICardSectionProps) => {
    const containerStyle = props.style ? Object.assign(styles.containerStyle, props.style) : styles.containerStyle;
    return (
        <View style={containerStyle} key={props.key} ref={props.ref}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1
    } as ViewStyle
};

export { CardSection };
