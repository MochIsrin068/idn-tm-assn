import Head from "next/head";
import React from "react";

type TPropsMeta = {
  title: string;
};

export default function Meta({ title }: TPropsMeta) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="IDN Media news" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
    </Head>
  );
}
