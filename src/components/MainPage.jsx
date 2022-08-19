import React from 'react';
import { ReactDOM } from 'react';
import { useTranslation } from 'react-i18next';


export default function MainPage() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>{t("MainPage.mainTitle")}</div>
  )
}
