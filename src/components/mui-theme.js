import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

export default () => {
  let overwrites = {
    "palette": {
        "textColor": "#000000",
        "canvasColor": "rgba(255, 255, 255, 0.54)",
        "secondaryTextColor": "rgba(0, 0, 0, 0.54)",
        "primary1Color": "#ffffff",
        "primary2Color": "#8c9eff",
        "primary3Color": "#8c9eff",
        "accent1Color": "#8c9eff",
        "accent3Color": "#9e9e9e",
        "alternateTextColor": "#ffffff",
        "disabledColor": "rgba(0, 0, 0, 0.12)",
        "accent2Color": "#303f9f"
    },
    "raisedButton": {
        "primaryTextColor": "#ffffff",
        "primaryColor": "#4caf50",
        "textColor": "#000000"
    },
    "checkbox": {
        "checkedColor": "#000000",
        "requiredColor": "#d32f2f"
    },
    "slider": {
        "handleFillColor": "#3d5afe",
        "selectionColor": "#3d5afe"
    },
    "appBar": {
        "textColor": "#000000"
    },
    "badge": {
        "primaryColor": "#000000"
    }
};
  return getMuiTheme(baseTheme, overwrites);
}