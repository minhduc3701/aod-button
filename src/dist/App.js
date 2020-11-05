"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
var index_1 = require("aod-dependencies/Button/index");
icons_1.initializeIcons();
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var _b = react_1["default"].useState(false), disabled = _b[0], setDisabled = _b[1];
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    var onChangeDisable = function () {
        setDisabled(!disabled);
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode }),
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Disable", onChange: onChangeDisable })),
            react_1["default"].createElement(index_1["default"], { text: "Button", onClick: function () { return console.log("click"); }, 
                // <ButtonDarkMode>
                darkMode: darkMode, 
                // </ButtonDarkMode>
                disabled: disabled, 
                // <ButtonIcon>
                icon: "Delete" }))));
}
exports["default"] = App;
