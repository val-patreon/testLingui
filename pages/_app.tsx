import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import  {messages as messagesCS} from "../locales/cs/messages.js"
import  {messages as messagesEN} from "../locales/en/messages.js"
import  {messages as messagesFR} from "../locales/fr/messages.js"


// Todo - do these have to be global scope??
i18n.load("cs", messagesCS);
i18n.load("en", messagesEN);
i18n.load("fr", messagesFR);
i18n.activate("cs");

function MyApp({ Component, pageProps }: AppProps) {
  return  <I18nProvider i18n={i18n}><Component {...pageProps} /></I18nProvider>
}

export default MyApp
