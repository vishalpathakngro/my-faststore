import React from "react";
// import { usePDP } from "@faststore/core";

import { query } from "./CustomQuery";
import { useQuery_unstable as useQuery } from "@faststore/core/experimental";
export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {
  /** 
  @Example1 :- Fetching the Data
  const context = usePDP();
  console.log("Context", context);

  */

  const { data, ...rest } = useQuery(query);

  console.log('Data', data, rest);

  return (
    <section>
      <h2>{props.title}</h2>
      <a href={props.link.url}>{props.link.text}</a>
      <p>{data?.extra?.message}</p>
    </section>
  );
}
