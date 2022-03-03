import React from "react";
import { Helmet } from "react-helmet-async";

const oneTrustCookie = (props) => {
  const langCode = "en";

  return (
    <>
      {props?.id && props?.url && (
        <Helmet htmlAttributes={{ lang: langCode }}>
          <script
            src={props.url}
            type="text/javascript"
            charset="UTF-8"
            data-domain-script={props?.id}
          ></script>
          <script type="text/javascript">
            {`function OptanonWrapper() { }`}
          </script>
        </Helmet>
      )}
    </>
  );
};

export default oneTrustCookie;
