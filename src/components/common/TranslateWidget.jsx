import { useEffect, useState } from "react";

const TranslateWidget = () => {
  const languages = {
    en: "English",
    hi: "Hindi",
    mr: "Marathi",
    gu: "Gujarati",
  };

  const [selectedLang, setSelectedLang] = useState("en");

  // Helper: Set cookie
  const setCookie = (name, value) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${name}=${value};path=/;expires=${expires.toUTCString()}`;
  };

  // Helper: Get cookie
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  };

  // Inject Google Translate script AFTER setting cookie
  const loadGoogleTranslate = () => {
    if (window.google?.translate?.TranslateElement) return;

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  };

  // Google Translate init
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: Object.keys(languages).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // On first mount: ensure English is default
    const current = getCookie("googtrans");
    if (!current || current === "/en/hi" || current === "/en/mr" || current === "/en/gu") {
      setCookie("googtrans", "/en/en");
    }

    loadGoogleTranslate();
  }, []);

  // Language switch handler
  const handleLanguageChange = (lang) => {
    const langCode = lang || "en";
    setSelectedLang(langCode);
    setCookie("googtrans", `/en/${langCode}`);

    // Force translation (important)
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex items-center gap-2 notranslate" translate="no">
      <select
        value={selectedLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="p-2 rounded border border-gray-300 text-sm notranslate"
      >
        {Object.entries(languages).map(([code, label]) => (
          <option key={code} value={code} className="notranslate">
            {label}
          </option>
        ))}
      </select>

      {/* Hidden Google Translate widget */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default TranslateWidget;

