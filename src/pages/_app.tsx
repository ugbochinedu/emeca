import "@/styles/globals.css";
import "@/styles/addCompanyPageStyle/addCompanyModal.css";
import { Nunito_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { store } from "../redux/store/store";
import { Provider } from 'react-redux'

const nunito_sans = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <Provider store={store}>
    <main className={nunito_sans.className}>
  <Component {...pageProps} />
  </main>
  </Provider>);

}
