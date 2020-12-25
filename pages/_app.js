import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} {...router} />
}

export default MyApp
