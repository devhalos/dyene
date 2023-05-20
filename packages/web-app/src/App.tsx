import { useTranslation } from "react-i18next";

import "./shared/lang";

export default function App() {
  const { t } = useTranslation();

  return <p>{t("greetings")}</p>;
}
