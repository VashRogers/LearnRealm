import React from "react";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


import { Container, Name, Stats, Stat, StatCount, Description } from "./styles";

export default function Repository({ data }) {

    
    return(
        <Container>
            <Name>{data.name}</Name>
            <Description>{data.description}</Description>

            <Stats>
                <Stat>
                    <FontAwesome name="star" size={24} color="black" />
                    <StatCount>{data.stars}</StatCount>
                </Stat>
            </Stats>
        </Container>
    )
}