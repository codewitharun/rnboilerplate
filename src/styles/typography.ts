import { fonts } from "@src/styles/fonts";
import { FontSize, LineHeight } from "@utils/responsiveText";

export const Typography = {
  heading1: {
    fontSize: FontSize.display,
    lineHeight: LineHeight.loose,
    fontFamily: fonts.loraBold,
  },
  heading2: {
    fontSize: FontSize.headline,
    lineHeight: LineHeight.relaxed,
    fontFamily: fonts.loraSemiBold,
  },
  heading3: {
    fontSize: FontSize.title,
    lineHeight: LineHeight.relaxed,
    fontFamily: fonts.loraMedium,
  },
  subtitle: {
    fontSize: FontSize.subtitle,
    lineHeight: LineHeight.normal,
    fontFamily: fonts.loraRegular,
  },
  body: {
    fontSize: FontSize.body,
    lineHeight: LineHeight.normal,
    fontFamily: fonts.questrial,
  },
  small: {
    fontSize: FontSize.small,
    lineHeight: LineHeight.tight,
    fontFamily: fonts.questrial,
  },
  caption: {
    fontSize: FontSize.caption,
    lineHeight: LineHeight.tight,
    fontFamily: fonts.questrial,
  },
};
