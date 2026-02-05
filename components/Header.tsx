import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

const Header = () => {

    const todos = useQuery(api.todos.getTodos);
    return (
        <View>  
            <Text>Header</Text>
        </View>
    );
}

