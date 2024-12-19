import "@/styles/globals.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {    
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('token');      
      if (user) {
        if (router.asPath === '/login' || router.asPath === '/register') {
          router.push('/');
        }
      } else {
        if (router.asPath !== '/login' && router.asPath !== '/register') {
          router.push('/login');
        }
      }
    }
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
