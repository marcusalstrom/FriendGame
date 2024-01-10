import { useMemo } from "react";
import { useStyles, createStyleSheet } from "styles";
import { View, Text } from "react-native";
import { SpinnerLoader } from "components/SpinnerLoader";
import { ArrowRight } from "components/ArrowRight";
import { Plus } from "components/Plus";

export interface BaseButtonProps {
  property1: "Default" | "Small";
  testID?: string;
}

export function BaseButton(props: BaseButtonProps) {
  const { styles, theme } = useStyles(stylesheet);

  const _property1Small = props.property1 === "Small";

  const classes = useMemo(
    () => ({
      root: [styles.root, _property1Small && styles.rootProperty1Small],
      iconLeft: [
        styles.iconLeft,
        _property1Small && styles.iconLeftProperty1Small,
      ],
      buttonText: [
        styles.buttonText,
        _property1Small && styles.buttonTextProperty1Small,
      ],
      iconRight: [
        styles.iconRight,
        _property1Small && styles.iconRightProperty1Small,
      ],
    }),
    [styles, props.property1]
  );

  const colors = useMemo(
    () => ({
      plus: [theme.colors.primaryForeground, _property1Small && "#000000"]
        .filter(Boolean)
        .pop(),
      arrowRight: [theme.colors.primaryForeground, _property1Small && "#000000"]
        .filter(Boolean)
        .pop(),
    }),
    [props.property1]
  );

  return (
    <View style={classes.root} testID={props.testID}>
      <View style={classes.iconLeft} testID="3014:8892">
        <Plus testID="3014:8893" />
      </View>
      <Text style={classes.buttonText} testID="3014:8894">
        {`Button text`}
      </Text>
      <View style={classes.iconRight} testID="3014:8895">
        <SpinnerLoader animation="step_1" size="$16px" testID="3016:8929" />
        <ArrowRight testID="3014:8896" />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flexDirection: "row",
    height: 64,
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 12,
    columnGap: 12,
    flexShrink: 0,
    borderRadius: 100,
    backgroundColor: theme.colors.monochromatic10,
  },
  rootProperty1Small: {
    height: 36,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    rowGap: 8,
    columnGap: 8,
  },
  iconLeft: {
    flexDirection: "row",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLeftProperty1Small: {
    width: 20,
    height: 20,
  },
  buttonText: {
    color: theme.colors.fontDark,
    textAlign: "center",
    fontFamily: "Gothic A1",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
  },
  buttonTextProperty1Small: {
    fontSize: 14,
    lineHeight: 20,
  },
  iconRight: {
    width: 24,
    height: 24,
  },
  iconRightProperty1Small: {
    width: 20,
    height: 20,
  },
}));
