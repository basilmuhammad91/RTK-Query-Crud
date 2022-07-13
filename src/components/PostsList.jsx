import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { useGetAllPostsQuery } from '../services/Post'
import PostCard from './PostCard';

export const PostsList = () => {

    const { data } = useGetAllPostsQuery()

    const renderItem = ({item}) => <PostCard {...item} />

    return (
        <View>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({})