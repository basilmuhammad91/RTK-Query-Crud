import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";
import { useDeletePostMutation } from '../services/Post';

const PostCard = ({ id, title, onDelete}) => {
  // const {deletePost} = useDeletePostMutation()
  const onEdit = () => console.warn(id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ alignSelf: 'center', flexDirection: 'row', width: '13%', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={onEdit}>
          <Icon name="edit-3" type='feather' size={16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Icon name="delete" type='MaterialCommunityIcons' size={16} />
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  title: {
    fontWeight: '600',
    fontSize: 15,
    width: '87%',
  }
})