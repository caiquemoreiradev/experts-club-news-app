import { useNavigation } from "@react-navigation/native";

import { Container, NewsAuthor, NewsCategory, NewsFooter, NewsPublishDate, NewsTitle, NewsTopContent } from "./styles";

interface Props {
    id: string;
    title: string;
    category: string;
    author: string;
    publish_date: string;
}

export function NewsCard({ id, title, category, author, publish_date }: Props) {

    const navigation = useNavigation();

    function handleNewsDetails() {

        navigation.navigate('details', { id } );
    }

    return (
        <Container onPress={handleNewsDetails}>
            <NewsTopContent>
                <NewsCategory>{category}</NewsCategory>
                <NewsTitle>{title}</NewsTitle>
            </NewsTopContent>

            <NewsFooter>
                <NewsAuthor>{author}</NewsAuthor>
                <NewsPublishDate>Publicado em {publish_date}</NewsPublishDate>
            </NewsFooter>
        </Container>
    )
}