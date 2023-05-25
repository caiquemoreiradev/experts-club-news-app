import styled from "styled-components/native";

export const Container = styled.View`

    padding: 48px 24px;

    height: 240px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const HeaderTopContent = styled.View`

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 24px;
`;

export const TodayDate = styled.Text`

    color: ${({ theme }) => theme.COLORS.GRAY};

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 14px;
`;

export const IconContainer = styled.TouchableOpacity`

    padding: 10px;
    border-radius: 25px;
`;

export const WelcomeMessage = styled.Text`

    color: ${({ theme }) => theme.COLORS.SHAPE};

    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: 24px;
`;

export const WelcomeDescription = styled.Text`

    color: ${({ theme }) => theme.COLORS.SHAPE};

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 18px;
`;