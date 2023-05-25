import { useMemo, useState } from "react";
import { FlatList } from "react-native";

import { useQuery } from '@apollo/client';
import { GET_ALL_POST } from '../../graphql/query/posts';

import { NewsCard } from "../NewsCard";

export function NewsList() {

    const [category, setCategory] = useState('');
    
    const { data, loading, refetch } = useQuery(GET_ALL_POST, {
        variables: {
            where: category ? { category } : undefined,
        },
    });

    const posts = useMemo(() => {
        if (!loading && data?.posts) {
            return data.posts;
        }
        return [];
    }, [loading, data]);


    return (
        <FlatList
            data={posts}
            style={{
                padding: 16,
                paddingBottom: 32
            }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <NewsCard
                    id={item.id}
                    title={item.newsTitle}
                    category={item.categories}
                    publish_date={item.publishDate}
                    author={item.author}
                />
            )}
            showsVerticalScrollIndicator={true}
        />
    )
}