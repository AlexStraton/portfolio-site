import Select from "react-dropdown-select";
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";

export default function LanguageSelect() {
   const { lang, setLang } = useContext(LangThemeContext);
const options = [
  {
    value: 'en',
    label: '🇬🇧ENG'
  },
  {
    value: 'sp',
    label: '🇪🇸ESP'
  }
];
const defaultValue = [options.find(opt => opt.value === lang) || options[0]];
return <Select className='rounded-lg' options={options} onChange={(values) => {
  if (values && values[0]) setLang(values[0].value);
}} values={defaultValue}/>;
}
