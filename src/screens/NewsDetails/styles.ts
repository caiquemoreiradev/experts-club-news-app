import styled from "styled-components/native";

export const Container = styled.View`

    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`

    padding: 40px 24px 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const ArrowBackContainer = styled.TouchableOpacity`

    background-color: ${({ theme }) => theme.COLORS.SHAPE};
    
    width: 50px;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-radius: 25px;
`;

export const NewsContent = styled.ScrollView`

    padding-bottom: 48px;
`;

export const NewsTitle = styled.Text`

    padding: 4px 24px;

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 32px;

    color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const NewsSubtitle = styled.Text`

    padding: 0 24px 16px;

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const NewsInfoContainer = styled.View`

    padding: 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const AuthorContainer = styled.View`

    flex-direction: row;
    align-items: center;
`;

export const AuthorName = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 14px;

    color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const AuthorImageProfile = styled.Image`

    width: 40px;
    height: 40px;

    margin-right: 8px;

    border-radius: 20px;
`;

export const PublishDate = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const NewsImage = styled.Image`

    width: 100%;
    height: 160px;

    margin-bottom: 16px;
`;

export const NewsText = styled.Text`

    padding: 12px 24px 24px;

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 14px;

    color: ${({ theme }) => theme.COLORS.BLACK};
`;