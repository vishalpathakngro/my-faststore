import React from "react";
import { usePDP }  from "@faststore/core";

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {
  const context = usePDP();
  console.log('Context', context);

  return (
    <section>
      <h2>{props.title}</h2>
      <a href={props.link.url}>{props.link.text}</a>
    </section>
  );
}
