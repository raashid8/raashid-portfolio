import { Toolbar } from "@mui/material";
import "../styles/globals.css";
import Navbar from "./Components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Toolbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
