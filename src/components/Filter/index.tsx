import { Pressable, PressableProps, Text } from "react-native";
import { FilterProps } from "./filter";

export default function Filter({ filter, selected, ...rest }: FilterProps & PressableProps) {
  return (
    <Pressable {...rest}>
      <Text>{filter}</Text>
    </Pressable>
  )
}