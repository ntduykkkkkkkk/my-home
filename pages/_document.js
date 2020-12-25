import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link href="images/favicon.png" rel="shortcut icon" />
            <title>Ludus - Electronics, Apparel, Computers, Books, DVDs & more</title>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet" />

            <link rel="stylesheet" href="assets/css/vendor.css" />
            <link rel="stylesheet" href="assets/css/utility.css" />

            <link rel="stylesheet" href="assets/css/app.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://www.google-analytics.com/analytics.js" async defer></script>
          <script src="assets/js/vendor.js"></script>
          <script src="assets/js/jquery.shopnav.js"></script>
          <script src="assets/js/app.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
