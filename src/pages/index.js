import React from "react";
// import { View, Text } from "react-native";
import { Container, Title, Form, Input, Submit, List } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

import Repository from "../components/Repository";

export default function Main(props) {
    
    
    return(
        <Container>
            <Title>Repositórios</Title>
            <Form>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Procurar Repositório..."

                />
                <Submit
                    onPress={() => {

                    }}
                >
                    <MaterialIcons name="add" size={22} color="#ffff" />
                </Submit>
            </Form>
            
            <List
                keyboardShouldPersistTaps="handled"
                data={[
                    {
                        id:1,
                        name:"DadoMocado",
                        description:"Maycon é um repositório sobre o maycon APP",
                        stars:12345,
                        forks:12351684,
                    }
                ]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => {
                    console.log(item.id)
                    return(
                        <Repository data={item} />
                    )
                }}
            />

        </Container>
    )
}