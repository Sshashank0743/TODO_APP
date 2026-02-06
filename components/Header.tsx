import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

const Header = () => {
    const {colors} = useTheme();

    const homeStyles = createHomeStyles(colors)

    const todos = useQuery(api.todos.getTodos);
    return (
        <View style = {homeStyles.header}>  
            <Text>Header</Text>
        </View>
    );
}

