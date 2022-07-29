import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta
            name="facebook-domain-verification"
            content="yjw5zixsdksoi557ouk2rgcrju273r"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '389979976455254');
              fbq('track', 'PageView');
              fbq("track", "Test", { currency: "USD", value: 999999.0 });
            fbq("track", "Purchare", { currency: "USD", value: 999999.0 });`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=389979976455254&ev=PageView&noscript=1" />`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
