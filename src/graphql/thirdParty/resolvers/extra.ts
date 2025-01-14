const extraDataResolver = {
    Query: {
      extraData: () => {
        return {
          data: "Extra data",
        };
      },
      namedExtraData: (_: any, { name }: any) => {
        return {
          data: `Named extra data: ${name}`,
        };
      },
    },
  };
  
  export default extraDataResolver;