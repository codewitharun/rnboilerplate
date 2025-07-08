// components/TypographyText.tsx
import { fonts } from "@src/styles/fonts";
import { FontSize, LineHeight } from "@utils/responsiveText";
import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

type Variant =
  | "heading1"
  | "heading2"
  | "title"
  | "subtitle"
  | "body"
  | "caption";

interface TypographyTextProps extends TextProps {
  variant?: Variant;
  style?: TextStyle;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, TextStyle> = {
  heading1: {
    fontFamily: fonts.loraBold,
    fontSize: FontSize.display,
    lineHeight: LineHeight.loose,
  },
  heading2: {
    fontFamily: fonts.loraSemiBold,
    fontSize: FontSize.headline,
    lineHeight: LineHeight.relaxed,
  },
  title: {
    fontFamily: fonts.loraSemiBold,
    fontSize: FontSize.title,
    lineHeight: LineHeight.relaxed,
  },
  subtitle: {
    fontFamily: fonts.loraRegular,
    fontSize: FontSize.subtitle,
    lineHeight: LineHeight.normal,
  },
  body: {
    fontFamily: fonts.questrial,
    fontSize: FontSize.body,
    lineHeight: LineHeight.normal,
  },
  caption: {
    fontFamily: fonts.questrial,
    fontSize: FontSize.caption,
    lineHeight: LineHeight.tight,
  },
};

const TypographyText: React.FC<TypographyTextProps> = ({
  children,
  variant = "body",
  style,
  ...props
}) => {
  return (
    <Text style={[variantStyles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

export default TypographyText;
