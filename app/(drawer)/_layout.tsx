import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { Slot, router } from "expo-router";
import { useRoute } from "@react-navigation/native";

const DrawerLayout = () => {
  const route = useRoute(
    
  );
  const { session } = route.params;
  const sessionData = JSON.stringify(session);
  console.log(session, "=-===");
  const CustomDrawerComponent = (props                                  : DrawerContentComponentProps) => {
    return (
      <>
        <DrawerItem
          label={"home"}
          onPress={() => router.push("/(drawer)/(tabs)")}
        />
        <DrawerItem
          label={"profile"}
          onPress={() =>
            router.push({
              pathname: "/(drawer)/(tabs)/profile",
              params: sessionData,
            })
          }
        />
        <DrawerItem
          label={"scrren outside tabs 1"}
          onPress={() => router.push("/outside1")}
        />
        <DrawerItem
          label={"scrren outside tabs 2"}
          onPress={() => router.push("/outside2")}
        />
        <DrawerItem
          label={"reel"}
          onPress={() => router.push("/(drawer)/(tabs)/reel")}
        />
      </>
    );
  };

  console.log("=-------------");

  return (
    <GestureHandlerRootView                                   style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerComponent {...props} />}
      ></Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
