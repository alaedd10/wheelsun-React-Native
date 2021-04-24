import React, { useContext, useEffect, useState } from "react";
import Onboarding from "react-native-onboarding-swiper"; // 0.4.0
import { View, Text } from "react-native";

import {
  WalkthroughOne,
  WalkthroughTwo,
  WalkthroughThree,
} from "../components/SvgImages";
import Button from "../components/Button";
import { Strings, Colors } from "../constants";
import GlobalContext from "../contexts/GlobalContext";
import LanguageSwitch from "../components/LanguageSwitch";

const Square = ({ isLight, selected }: any) => {
  let backgroundColor = selected ? Colors.primary : "rgba(221, 133, 34, 0.4)";
  return (
    <View
      style={{
        width: 38,
        height: 3,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Next = ({ isLight, skipLabel, ...props }: any) => {
  const { language } = useContext(GlobalContext);
  return (
    <Button
      text={Strings[language].screens.walkthrough.nextBtn}
      textStyle={{ color: Colors.primary, fontSize: 16 }}
      containerStyle={{
        width: 100,
        backgroundColor: "transparent",
      }}
      {...props}
    />
  );
};

const Skip = ({ isLight, skipLabel, ...props }: any) => {
  const { language } = useContext(GlobalContext);
  return (
    <Button
      text={Strings[language].screens.walkthrough.skipBtn}
      textStyle={{ color: Colors.primary, fontSize: 16 }}
      containerStyle={{ width: 100, backgroundColor: "transparent" }}
      {...props}
    />
  );
};

const Walkthrough = ({
  onPress,
  onSkip,
}: {
  onPress: () => void;
  onSkip: () => void;
}) => {
  const { setLanguage, language } = useContext(GlobalContext);
  const [isFrench, setIsFrench] = useState(true);

  const toggleSwitch = () => {
    setIsFrench((previousState) => !previousState);
  };

  useEffect(() => {
    if (isFrench) setLanguage("fr");
    else setLanguage("eng");
  }, [isFrench]);

  return (
    <>
      <LanguageSwitch value={isFrench} onValueChange={toggleSwitch} />
      <Onboarding
        DotComponent={Square}
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        pages={[
          {
            backgroundColor: Colors.white,
            image: <WalkthroughOne />,
            title: Strings[language].screens.walkthrough.title1,
            subtitle: Strings[language].screens.walkthrough.text1,
          },
          {
            backgroundColor: Colors.white,
            image: <WalkthroughTwo />,
            title: Strings[language].screens.walkthrough.title2,
            subtitle: Strings[language].screens.walkthrough.text2,
          },
          {
            backgroundColor: Colors.white,
            image: <WalkthroughThree />,
            title: Strings[language].screens.walkthrough.title3,
            subtitle: (
              <View style={{ alignItems: "center", paddingHorizontal: 10 }}>
                <Text
                  style={{
                    color: Colors.secondary,
                    fontSize: 16,
                    marginBottom: 20,
                    textAlign: "center",
                  }}
                >
                  {Strings[language].screens.walkthrough.text3}
                </Text>
                <Button
                  text={Strings[language].screens.walkthrough.getStartedBtn}
                  containerStyle={{
                    width: 303,
                  }}
                  onPress={onPress}
                />
              </View>
            ),
          },
        ]}
        showDone={false}
        bottomBarColor={Colors.white}
        imageContainerStyles={{ paddingBottom: 10 }}
        containerStyles={{
          paddingBottom: 60,
        }}
        titleStyles={{
          fontWeight: "700",
          color: Colors.tertiary,
          fontSize: 18,
        }}
        subTitleStyles={{ color: Colors.secondary, fontSize: 16 }}
        onSkip={onSkip}
      />
    </>
  );
};

export default Walkthrough;
