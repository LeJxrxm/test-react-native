import React from "react";
import { Text, TextStyle } from "react-native";

interface H1Props {
    content: string;
}

const H1: React.FC<H1Props> = ({ content }) => {
    return (
        <Text style={style}>
            {content}
        </Text>
    );
};

const style: TextStyle = {
    fontWeight: '700',
    fontSize: 32
};

export default H1;
