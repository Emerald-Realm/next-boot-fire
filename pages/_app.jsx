import '../style/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer'
import Header from './components/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
