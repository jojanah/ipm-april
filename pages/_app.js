// pages/_app.js
import 'swiper/css';  // Import Swiper base styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../public/assets/css/main.css';
import '../public/assets/css/main-rtl.css';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/bootstrap-rtl.min.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/aos.css';
import '../public/assets/css/icons.css';
import '../public/assets/css/normalize.css';
import '../styles/globals.css';
import { LanguageProvider } from "@/context/Lang";

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
