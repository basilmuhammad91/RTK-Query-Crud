import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostCard = ({title, body}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
        backgroundColor: '#F6F8FA',
        flexDirection: 'row',
        marginVertical: 5,
    },

    title: {
        fontWeight: '600',
        fontSize: 15,
    }
})