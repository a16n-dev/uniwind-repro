import { Text, View } from "react-native";

import { FlashList } from "@shopify/flash-list";

export default function HomeScreen() {
  return (
    <View className={"pt-16 flex-1"}>
      <FlashList
        className={"bg-blue-300"}
        contentContainerClassName={"border-4 border-blue-500"}
        renderItem={({ item }) => (
          <View
            className={"h-[100px] m-4 justify-center items-center bg-blue-800"}
          >
            <Text className={"text-blue-100"}>{item}</Text>
          </View>
        )}
        data={[1, 2, 3]}
      />
    </View>
  );
}
