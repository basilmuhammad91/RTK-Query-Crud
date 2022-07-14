import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { useDeletePostMutation, useGetAllPostsQuery } from '../services/Post'
import PostCard from './PostCard';

export const PostsList = () => {

    const { data } = useGetAllPostsQuery()
    const [deletePost] = useDeletePostMutation()

    const renderItem = ({ item }) => <PostCard onDelete={(id) => deletePost(id)} {...item} />

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