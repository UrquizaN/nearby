import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  isSelected?: boolean;
  name: string;
  iconId: string;
}

export function Category({ name, isSelected = false, iconId, ...rest }: Props) {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
    </Pressable>
  )
}