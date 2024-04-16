import { FlatList } from "react-native";

import Filter from "@/components/Filter";
import { styles } from "./styles";
import { FilterProps } from "./filters";

export default function Filters({ filters, filter, onChange }: FilterProps) {
  return (
    <FlatList
      style={styles.list}
      data={filters}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}