import { useEffect } from "react";

const TranslateWidget = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (window.google?.translate?.TranslateElement) return;

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,gu", // Customize this
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div id="google_translate_element" className="mt-2 mb-4"></div>
  );
};

export default TranslateWidget;
