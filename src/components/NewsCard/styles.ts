import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

    padding: 24px 16px;

    border-bottom-width: 0.5px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const NewsTopContent = styled.View`

    margin-bottom: 16px;
`;

export const NewsCategory = styled.Text`

    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const NewsTitle = styled.Text`

    color: ${({ theme }) => theme.COLORS.BLACK};

    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const NewsFooter = styled.View``;

export const NewsAuthor = styled.Text`

    margin-bottom: -4px;

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 14px;
`;

export const NewsPublishDate = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY};
`;