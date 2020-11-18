import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{`ProShop | ${title ? title : ""}`}</title>
      <meta name="description" content={`ProShop | ${description}`} />
      <meta name="keyword" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  description: "Best products cheap",
  keywords: "electronics, buy, cheap",
};

export default Meta;
