import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
}
function Button({ children, isLoading = false, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  )
}

function Title({ children, style }: TextProps) {
  return (
    <Text style={[styles.title, style]}>
      {children}
    </Text>
  )
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}
function Icon({ icon: Icon }: IconProps) {
  return <Icon color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export { Button };
