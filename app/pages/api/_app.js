// pages/_app.js
import '../styles/globals.css'; // Ensure this path matches your actual file structure

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
