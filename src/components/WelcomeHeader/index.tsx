import { Feather } from '@expo/vector-icons';
import theme from '../../theme';

import { Container, HeaderTopContent, IconContainer, TodayDate, WelcomeDescription, WelcomeMessage } from "./styles";

export function WelcomeHeader() {

    return (
        <Container>

            <HeaderTopContent>
                <TodayDate>07 de junho</TodayDate>

                <IconContainer>
                    <Feather name='filter' color={theme.COLORS.SUCCESS_900} size={24} />
                </IconContainer>
            </HeaderTopContent>

            <WelcomeMessage>Olá Caique,</WelcomeMessage>
            <WelcomeDescription>acompanhe as últimas notícias</WelcomeDescription>
        </Container>
    )
}