import React, { useState } from "react";
// import { View, Text } from "react-native";
import { Container, Title, Form, Input, Submit, List } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import api from "../services/api";

import Repository from "../components/Repository";
import getRealm from "../services/realm";

export default function Main(props) {
    
    const [ input, setInput ] = useState('');

    const saveRepository = async (repository) => {
        const data = {
            id: repository.id,
            name: repository.name,
            fullName: repository.full_name,
            description: repository.description,
            stars: repository.starsgazers_count
        }
        
        const realm = await getRealm();
    }


    const handleAddRepository = async () => {
        console.log(input)
        try{
            const response = await api.get(`/repos/${input}`);

        }
        catch(err){

        }
    }

    return(
        <Container>
            <Title>Repositórios</Title>
            <Form>
                <Input
                    value={input}
                    onChangeText={setInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Procurar Repositório..."
                />
                <Submit
                    onPress={handleAddRepository}
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
                    return(
                        <Repository data={item} />
                    )
                }}
            />

        </Container>
    )
}