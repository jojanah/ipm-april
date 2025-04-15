import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("ar")}>Arabic</button>
    </div>
  );
}
