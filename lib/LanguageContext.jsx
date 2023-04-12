import { createContext, useContext, useReducer } from "react";

const LanguageContext = createContext(null);

const LanguageDispatchContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, dispatch] = useReducer(LanguageReducer, initialLanguage);

  return (
    <LanguageContext.Provider value={language}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageDispatch() {
  return useContext(LanguageDispatchContext);
}

function LanguageReducer(language, action) {
  if (action.type === "english") {
    return "english";
  }
  if (action.type === "french") {
    return "french";
  }
}

const initialLanguage = "english";
