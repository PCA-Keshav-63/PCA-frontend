import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="border rounded px-2 py-1 text-sm text-gray-700"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="mr">Marathi</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageSelector;
