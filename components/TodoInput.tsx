import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { useMutation } from 'convex/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const TodoInput = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newTodo, setNewTodo] = useState("");
    const addTodo = useMutation(api.todos.addTodo);

  return (
    <View>
      <Text>TodoInput</Text>
    </View>
  )
}

export default TodoInput