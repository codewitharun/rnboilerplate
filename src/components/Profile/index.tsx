import { storeValue } from "@src/api/services/AsyncStorageFunctions";
import { userService } from "@src/api/services/userService";
import GradientScreenWrapper from "@src/components/GradientWrapper/index.tsx";
import { useAppDispatch, useAppSelector } from "@src/hooks/useRedux.ts";
import { useAppNavigation } from "@src/hooks/useTypedNavigation.ts";
import { updateUser } from "@src/redux/auth";
import { themeColors } from "@src/styles/colors.ts";
import { HP, WP } from "@src/utils/constants";
import { BackSvg, EditSvg } from "@src/utils/svgPath";
import { fonts } from "@styles/fonts";
import { FontSize, Spacing } from "@utils/responsiveText";
import { CircleX } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import CustomButton from "../CustomButton/Button";

const Profile = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [phoneError, setPhoneError] = useState("");
  const [skills, setSkills] = useState<string[]>(user.skills ?? []);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);

  const handlePhoneChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, ""); // Remove non-digits
    setPhoneNumber(cleaned);
    const isValid = /^[6-9]\d{9}$/.test(cleaned); // Indian mobile format
    setPhoneError(
      isValid || phoneNumber === ""
        ? ""
        : "Enter a valid 10-digit number starting with 6-9"
    );
  };

  const [experienceOptions] = useState([
    { label: "Beginner (0-2 years)", value: "Beginner" },
    { label: "Intermediate (2-4 years)", value: "Intermediate" },
    { label: "Advanced (4-10 years)", value: "Advanced" },
    { label: "Expert (10+ years)", value: "Expert" },
  ]);

  const [experience, setExperience] = useState(user?.experience ?? "N/A");

  const skillOptions = [
    { label: "Painter", value: "painter" },
    { label: "Singer", value: "singer" },
    { label: "Dancer", value: "dancer" },
    { label: "Electrician", value: "electrician" },
    { label: "Photographer", value: "photographer" },
    { label: "Others", value: "others" },
  ];

  const scrollRef = useRef<ScrollView>(null);

  const renderInfoRow = (label: string, value: string | React.ReactNode) => (
    <View style={styles.infoRow}>
      <Text style={styles.infoTextKey}>{label}</Text>
      {typeof value === "string" ? (
        <Text style={styles.infoTextValue}>{value}</Text>
      ) : (
        value
      )}
    </View>
  );

  const onSubmit = async () => {
    if (phoneError || !phoneNumber || !experience || skills.length === 0) {
      console.warn("Validation failed");
      return;
    }

    try {
      setIsEditing(false);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
      const updatePayload = {
        phone: phoneNumber,
        experience,
        skills,
      };

      const res = await userService.updateUserProfile(user.id, updatePayload);
      console.log("🚀 ~ onSubmit ~ res:", res);
      dispatch(updateUser(res.data));
      await storeValue("user", JSON.stringify(res.data));
      setSelectedSkill([]);
    } catch (error) {
      console.log("❌ Error updating profile:", error);
    }
  };

  const removeSkill = (index: number) => {
    const removedSkill = skills[index];
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);

    setSelectedSkill((prev) =>
      Array.isArray(prev) ? prev.filter((skill) => skill !== removedSkill) : []
    );
  };

  const availableSkillOptions = skillOptions.filter(
    (option) => !skills.includes(option.value)
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <GradientScreenWrapper>
        <View style={styles.appContainer}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(), setIsEditing(false);
                scrollRef.current?.scrollTo({ y: 0, animated: true });
                setPhoneNumber(user.phone ?? "000000000");
                setPhoneError("");
              }}
              style={styles.iconButton}
            >
              <BackSvg color="#000" size={22} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Profile</Text>

            <TouchableOpacity
              onPress={() => {
                setIsEditing(!isEditing),
                  scrollRef.current?.scrollTo({ y: 0, animated: true });
              }}
              style={[
                styles.iconButton,
                {
                  display: isEditing ? "none" : "flex",
                },
              ]}
            >
              <EditSvg color="#000" size={22} />
            </TouchableOpacity>
          </View>

          {/* Profile Section */}
          <View style={styles.profileContainer}>
            {user.photo ? (
              <Image source={{ uri: user.photo }} style={styles.profileImage} />
            ) : (
              <View style={styles.emptyProfileImage}>
                <Text style={styles.emptyProfileText}>
                  {user.fullName?.[0]?.toUpperCase()}
                </Text>
              </View>
            )}
            <Text style={styles.nameText}>{user.fullName}</Text>

            {/* Card Section */}
            <View style={styles.cardContainer}>
              <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                style={{ width: WP(90), alignSelf: "center" }}
              >
                <View style={{ height: HP(90) }}>
                  <Text style={styles.sectionTitle}>Personal</Text>
                  {renderInfoRow("Email:", user.email)}
                  <View
                    style={{
                      flexDirection: "row",
                      // alignSelf: 'center',
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.infoTextKey}>Phone:</Text>
                    {isEditing ? (
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TextInput
                          value={phoneNumber}
                          keyboardType="number-pad"
                          maxLength={10}
                          onChangeText={handlePhoneChange}
                          style={[
                            styles.input,
                            styles.editBox,
                            isEditing && { bottom: 5 },
                            phoneError && { borderColor: "red" },
                          ]}
                        />
                        {phoneError ? (
                          <Text
                            style={{
                              color: "red",
                              marginTop: 4,
                              flexWrap: "wrap",
                              width: WP(60),

                              fontSize: 12,
                              fontFamily: fonts.questrial,
                            }}
                          >
                            {phoneError}
                          </Text>
                        ) : null}
                      </View>
                    ) : (
                      <Text style={styles.infoTextValue}>
                        {user.phone ?? "000000000"}
                      </Text>
                    )}
                  </View>

                  {renderInfoRow(
                    "Status:",
                    user.status?.title ? user.status?.title : "Not Set"
                  )}

                  <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
                    Work
                  </Text>
                  <View
                    style={{
                      flexDirection: "row", // alignSelf: 'center',
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.infoTextKey}>Experience:</Text>
                    {isEditing ? (
                      <Dropdown
                        style={{
                          width: WP(60),
                          height: HP(5),
                          borderColor: themeColors.secondaryColor,
                          borderWidth: 1,
                          borderRadius: 8,
                          paddingHorizontal: 10,
                          backgroundColor: "#fff",
                        }}
                        data={experienceOptions}
                        labelField="label"
                        valueField="value"
                        placeholder="Choose Experience"
                        value={experience}
                        showsVerticalScrollIndicator={false}
                        onChange={(item) => setExperience(item.value)}
                        selectedTextStyle={{ color: "#000" }}
                        placeholderStyle={{ color: "#aaa" }}
                        itemTextStyle={{ color: "#000" }}
                        maxHeight={200}
                        containerStyle={{
                          borderColor: themeColors.secondaryColor,
                          borderWidth: 1,
                          borderRadius: 5,

                          backgroundColor: "#fff",
                        }}
                      />
                    ) : (
                      <Text style={styles.infoTextValue}>{experience}</Text>
                    )}
                  </View>

                  {isEditing && (
                    <View
                      style={{
                        flexDirection: "row", // alignSelf: 'center',
                        alignItems: "center",
                        marginTop: 10,
                        marginBottom: 10,
                        height: HP(10),
                      }}
                    >
                      <Text style={styles.infoTextKey}>Add Skills:</Text>
                      <View>
                        <MultiSelect
                          style={{
                            width: WP(60),
                            height: HP(5),
                            borderColor: themeColors.secondaryColor,
                            borderWidth: 1,
                            borderRadius: 8,
                            paddingHorizontal: 10,
                            backgroundColor: "#fff",
                          }}
                          data={availableSkillOptions}
                          labelField="label"
                          valueField="value"
                          placeholder="Choose Skills"
                          // search
                          searchPlaceholder="Select Skills"
                          inputSearchStyle={{
                            color: "#000", // Black text
                            fontSize: 14,
                            paddingHorizontal: 8,
                          }}
                          value={selectedSkill}
                          onChange={(newSelected: string[]) => {
                            const unique = newSelected.filter(
                              (skill) => !skills.includes(skill)
                            );
                            setSkills((prev) => [...prev, ...unique]);
                            setSelectedSkill([]);
                          }}
                          selectedTextStyle={{ color: "#000" }}
                          placeholderStyle={{ color: "#aaa" }}
                          itemTextStyle={{ color: "#000" }}
                          showsVerticalScrollIndicator={false}
                          maxHeight={500}
                          containerStyle={{
                            borderColor: themeColors.secondaryColor,
                            borderWidth: 1,
                            borderRadius: 5,

                            backgroundColor: "#fff",
                          }}
                          dropdownPosition="top"
                        />
                      </View>
                    </View>
                  )}
                  <View style={styles.skillsRow}>
                    <Text style={styles.infoTextKey}>Skills:</Text>
                    <View style={styles.skillsWrap}>
                      {skills.map((skill, index) => (
                        <TouchableOpacity
                          disabled={!isEditing}
                          key={index}
                          onPress={() => isEditing && removeSkill(index)}
                          style={[styles.skillBadge, getBadgeColor(skill)]}
                        >
                          <Text style={styles.skillText}>{skill}</Text>
                          {isEditing && (
                            <CircleX
                              size={20}
                              color={"white"}
                              style={{ marginLeft: 10 }}
                            />
                          )}
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                  {isEditing && (
                    <CustomButton
                      style={styles.button}
                      title="Done"
                      onPress={() => onSubmit()}
                    />
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </GradientScreenWrapper>
    </KeyboardAvoidingView>
  );
};

const getRandomDarkColor = () => {
  // H: 0-360, S: 60-100%, L: 20-40% to ensure dark colors
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 40) + 60; // 60–100%
  const lightness = Math.floor(Math.random() * 20) + 20; // 20–40%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const skillColorMap: { [key: string]: string } = {};

const getBadgeColor = (skill: string) => {
  const skillKey = skill.trim().toLowerCase();
  if (!skillColorMap[skillKey]) {
    skillColorMap[skillKey] = getRandomDarkColor();
  }
  return {
    backgroundColor: skillColorMap[skillKey],
  };
};

const styles = StyleSheet.create({
  appContainer: {
    width: WP(90),
    // justifyContent: 'space-between',
    alignItems: "center",
    height: HP(100),
  },
  headerContainer: {
    width: WP(95),
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  iconButton: {
    padding: 6,
    height: HP(4.5),
    width: WP(9),
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
    width: WP(77),
    textAlign: "center",
    fontFamily: fonts.loraRegular,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  skillsRow: {
    flexDirection: "row",
    alignItems: "flex-start",

    marginTop: 20,
  },
  skillsWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 8,
    columnGap: 8,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: themeColors.secondaryLight,
  },
  emptyProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: themeColors.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyProfileText: {
    fontSize: 40,
    color: "#fff",
  },
  nameText: {
    fontSize: FontSize.subtitle,
    color: "#fff",
    marginBottom: 4,
    marginTop: 10,
    fontFamily: fonts.questrial,
  },
  cardContainer: {
    backgroundColor: "white",
    width: WP(100),
    height: HP(80),
    borderTopEndRadius: Spacing.lg,
    borderTopStartRadius: Spacing.lg,
    padding: Spacing.xl,
    marginTop: Spacing.xl,
  },
  sectionTitle: {
    fontFamily: fonts.loraSemiBold,
    fontSize: FontSize.body,
    marginBottom: 10,
    color: "#000",
    textDecorationLine: "underline",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    height: HP(4.5),
    width: WP(83),
    justifyContent: "center",
    alignItems: "center",
  },
  infoTextKey: {
    fontFamily: fonts.questrial,
    fontSize: 16,
    color: "#333",
    width: 90,
  },
  infoTextValue: {
    fontFamily: fonts.questrial,
    fontSize: 16,
    color: "grey",
    flex: 1,
  },
  skillBadge: {
    paddingVertical: HP(0.5),
    paddingHorizontal: WP(3),
    borderRadius: 8,
    minWidth: WP(15),
    alignItems: "center",
    flexDirection: "row",
  },
  skillText: {
    color: "#fff",
    fontSize: FontSize.small,
    fontFamily: fonts.questrial,
    textAlign: "center",
  },
  input: {
    borderColor: themeColors.primaryColor,
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    fontFamily: fonts.questrial,
    fontSize: 14,
    lineHeight: 18,
  },
  addButton: {
    backgroundColor: themeColors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  editBox: {
    borderColor: themeColors.secondaryColor,
    borderWidth: 1,
    height: HP(5),
    width: WP(60),
  },
  button: {
    alignSelf: "center",
    width: WP(85),
    // marginBottom: 20,
    marginTop: 20,
    // position: 'absolute',
    // bottom: 0,
  },
});

export default Profile;
