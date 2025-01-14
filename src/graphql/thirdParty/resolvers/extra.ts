const extraResolver = {
  Query: {
    extra: () => {
      return {
        message: "Extra data",
      };
    },
  },
};

export default extraResolver;
