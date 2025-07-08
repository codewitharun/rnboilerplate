import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

/**
 * Font sizes based on height percentage for better scaling.
 * Values are approximate and responsive across devices.
 */
export const FontSize = {
  caption: hp(1.3), // ≈ 10.4px
  small: hp(1.5), // ≈ 12px
  body: hp(1.8), // ≈ 14.4px
  base: hp(2.25), // ≈ 18px (default for paragraphs)
  subtitle: hp(2.5), // ≈ 20px
  title: hp(3), // ≈ 24px
  headline: hp(3.5), // ≈ 28px
  display: hp(4.5), // ≈ 36px
};

/**
 * Spacing values based on width percentage for horizontal spacing/padding.
 */
export const Spacing = {
  xs: wp(1), // Extra small spacing
  sm: wp(2), // Small
  md: wp(4), // Medium (recommended default)
  lg: wp(6), // Large
  xl: wp(8), // Extra large
  xxl: wp(10), // Double extra large
};

/**
 * Line heights mapped to tight, normal, and relaxed spacing.
 */
export const LineHeight = {
  tight: hp(1.6), // Compact line height
  normal: hp(2), // Standard/ideal for body text
  relaxed: hp(2.5), // Looser for readability
  loose: hp(3), // Extra spacing for headings or emphasis
};
