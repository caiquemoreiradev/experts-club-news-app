import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useQuery } from '@apollo/client';
import { GET_POST } from '../../graphql/query/posts';

import theme from '../../theme';


import { ArrowBackContainer, AuthorContainer, AuthorImageProfile, AuthorName, Container, Header, NewsContent, NewsImage, NewsInfoContainer, NewsSubtitle, NewsText, NewsTitle, PublishDate } from "./styles";
import { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';

interface Params {
    id: string;
}

export function NewsDetails() {

    const navigation = useNavigation();

    const route = useRoute();
    const { id } = route.params as Params;

    const { data, loading } = useQuery(GET_POST, {
        variables: { id },
    });

    const post = useMemo(() => {
        if (!loading && data?.post) {

            return data.post;
        }
        
        return [];
    }, [data, loading]);


    if (loading) {

        return (
          <SafeAreaView style={{flex: 1}}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator  />
            </View>
          </SafeAreaView>
        );
      }

    return (
        <Container>

            <StatusBar style='dark' backgroundColor='transparent' translucent />

            <Header>
                <ArrowBackContainer onPress={() => navigation.goBack()}>
                    <Feather size={24} name='arrow-left' color={theme.COLORS.BLACK} />
                </ArrowBackContainer>
            </Header>

            <NewsTitle>{post.newsTitle}</NewsTitle>
            <NewsSubtitle>{post.subtitle}</NewsSubtitle>

            <NewsContent>
                <NewsInfoContainer>
                    <AuthorContainer>
                        <AuthorImageProfile source={{ uri: 'https://avatars.githubusercontent.com/u/56305107?v=4' }} />
                        <AuthorName>{post.author}</AuthorName>
                    </AuthorContainer>

                    <PublishDate>{post.publishDate}</PublishDate>
                </NewsInfoContainer>

                <NewsImage resizeMode='cover' source={{ uri: post.imageUrl }} />

                <NewsText>
                    {post.news.text.replace(/\\n/g, '\n')}
                </NewsText>

                <NewsText>
                    {post.newsPart2.text.replace(/\\n/g, '\n')}
                </NewsText>

                <NewsText>
                    {post.newsPart3.text.replace(/\\n/g, '\n \n')}
                </NewsText>

            </NewsContent>
        </Container>
    )
}