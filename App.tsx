import { config } from "@tamagui/config";
import { View } from "react-native";
import { Button, Popover, TamaguiProvider, createTamagui } from "tamagui";
const myConfig = createTamagui(config);
export default function App() {
  return (
    <TamaguiProvider config={myConfig}>
      <View>
        <Popover size="$5" allowFlip>
          <Popover.Trigger asChild>
            <Button>Open</Button>
          </Popover.Trigger>
          <Popover.Content
            borderWidth={1}
            borderColor="$borderColor"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            elevate
          >
            <Popover.Close asChild>
              <Button size="$3">Close</Button>
            </Popover.Close>
          </Popover.Content>
        </Popover>
      </View>
    </TamaguiProvider>
  );
}
