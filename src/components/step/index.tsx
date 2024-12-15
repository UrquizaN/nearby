import { colors } from "@/styles/theme";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>
}

export default function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={styles.container}>
      <Icon size={32} color={colors.red.base} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}