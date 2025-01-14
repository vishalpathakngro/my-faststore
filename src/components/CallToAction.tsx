import React from "react";
import { gql } from '@faststore/core/api'
import { useQuery_unstable as useQuery } from '@faststore/core/experimental';

export const extraQuery = gql`
    query Extra {
       extraData {
		      data
	     }
    }
}
`;

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {

  const { data, isValidating } = useQuery(extraQuery);
   


  console.log('Ttest',data, isValidating);
  
  return (
    <section>
      <h2>{props.title}</h2>
      <a href={props.link.url}>{props.link.text}</a>
    </section>
  );
}
