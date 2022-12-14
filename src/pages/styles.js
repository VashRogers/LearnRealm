import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ['#7159c1', '#9849c1'],
    start: { x:0, y:0 },
    end: { x:1, y:1 },
})`
    flex:1;
    padding-top: 30px;

`;

export const Title = styled.Text`
    font-size: 32px;
    color: #FFF;
    font-weight: bold;
    padding: 0 20px;
`;

export const Form = styled.View`
    flex-direction: row;
    margin-top: 10px;
    padding: 0 20px;

`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#9999'
})`
    flex: 1;
    padding:15px 12px;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    background: #fff;
    
`;

export const Submit = styled.TouchableOpacity`
    background: #6bd4c1;
    margin-left: 10px;
    justify-content: center;
    border-radius: 4px;
    padding: 0 14px;
    
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
    
`;
