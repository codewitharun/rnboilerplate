// components/TypographyText.tsx
import { fonts } from "@src/styles/fonts";
import { HP } from "@utils/constants";
import { FontSize } from "@utils/responsiveText";
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
    lineHeight: HP(5),
  },
  heading2: {
    fontFamily: fonts.loraSemiBold,
    fontSize: FontSize.headline,
    lineHeight: HP(4),
  },
  title: {
    fontFamily: fonts.loraSemiBold,
    fontSize: FontSize.title,
    lineHeight: HP(3.5),
  },
  subtitle: {
    fontFamily: fonts.loraRegular,
    fontSize: FontSize.subtitle,
    lineHeight: HP(3),
  },
  body: {
    fontFamily: fonts.questrial,
    fontSize: FontSize.body,
    lineHeight: HP(2.3),
  },
  caption: {
    fontFamily: fonts.questrial,
    fontSize: FontSize.caption,
    lineHeight: HP(1.8),
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
