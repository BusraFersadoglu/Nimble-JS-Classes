import "bulma/css/bulma.min.css";
import "../styles/globals.css";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
