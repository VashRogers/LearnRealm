import React from "react";
// import { View, Text } from "react-native";
import { Container, Title, Form, Input, Submit } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

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
                data={[]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => {
                    
                }}
            />
        </Container>
    )
}