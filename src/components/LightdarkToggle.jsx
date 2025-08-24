import SwitchSelector from "react-switch-selector";
import { useState } from "react";

export default function LightDarkToggle() {
const options = [
   {
       label: <span>🌞</span>,
       value: "light",
       selectedBackgroundColor: "#e6fc3eff",
   },
   {
       label: "🌜",
       value: "dark",
       selectedBackgroundColor: "#565629ff"
   }
];
const [theme, setTheme] = useState("light");
const onChange = (newValue) => {
    setTheme(newValue);
};

const initialSelectedIndex = options.findIndex(({value}) => value === theme);

return (
    <div className="cursor-pointer" style={{width: 100, height: 30}}>
        <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
        />
    </div>
);
}
