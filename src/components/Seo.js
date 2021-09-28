import React from "react";
import { Helmet } from "react-helmet";

class Seo extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          ></meta>
          <meta name="generator" content="Gatsby 3.4.1"></meta>
          <title>Juan Buitrago</title>
          <link rel="canonical" href="https://www.juanbuui.com" />
          <meta name="theme-color" content="#0f0f0f"></meta>
          <meta
            property="og:type"
            content="website"
            data-react-helmet="true"
          ></meta>
          <meta
            property="og:url"
            content="https://www.juanbuui.com"
            data-react-helmet="true"
          ></meta>
          <meta
            property="og:title"
            content="JuanBuitrago"
            data-react-helmet="true"
          ></meta>
          <meta
            property="og:description"
            content="Juan Buitrago es un ingeniero de software que se especializa en crear (y ocasionalmente diseñar) experiencias digitales excepcionales."
            data-react-helmet="true"
          ></meta>
          <meta
            name="twitter:title"
            content="Juan Buui"
            data-react-helmet="true"
          ></meta>
          <meta
            name="twitter:creator"
            content="@SSYBuitrago"
            data-react-helmet="true"
          ></meta>
          <meta
            name="twitter:description"
            content="Juan Buitrago es un ingeniero de software que se especializa en crear (y ocasionalmente diseñar) experiencias digitales excepcionales."
            data-react-helmet="true"
          ></meta>
          <meta
            name="twitter:card"
            content="summary_large_image"
            data-react-helmet="true"
          ></meta>
        </Helmet>
      </div>
    );
  }
}
export default Seo;
