import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";



export default function Footer() {
    const { lang } = useContext(LangThemeContext);

  return <>
<footer className="mb-0 flex justify-between items-center bg-gray-100 px-6 py-2">
{lang === 'sp' && <div className="text-xs md:text-xs lg:text-xs">© 2025 | Construido y diseñado por Alexandra Straton</div> }
{lang === 'en' && <div className="text-xs md:text-xs lg:text-xs">© 2025 | Built and designed by Alexandra Straton</div>}
</footer>
  </>
}
