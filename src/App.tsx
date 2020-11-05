import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import Button from "aod-dependencies/Button/index";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [buttonType, setButtonType] = React.useState<string>("");
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onChangeDisable = () => {
    setDisabled(!disabled);
  };
  const onChangePrimary = () => {
    if (buttonType === "") {
      setButtonType("Primary");
    }
    if (buttonType !== "") {
      setButtonType("");
    }
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
          <Toggle label="Primary" onChange={onChangePrimary} />
          <Toggle label="Disable" onChange={onChangeDisable} />
        </div>
        <Button
          text="Button"
          onClick={() => console.log("click")}
          // <ButtonDarkMode>
          darkMode={darkMode}
          // </ButtonDarkMode>
          disabled={disabled}
          // <ButtonIcon>
          icon="Delete"
          // </ButtonIcon>
          type={buttonType}
        />
      </Wrapper>
    </div>
  );
}

export default App;
