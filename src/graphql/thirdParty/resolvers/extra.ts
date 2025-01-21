const extraResolver = {
  Query: {
    extra: (...rest: any) => {
      return {
        message: "Extra data",
      };
    },
  },
};

export default extraResolver;
