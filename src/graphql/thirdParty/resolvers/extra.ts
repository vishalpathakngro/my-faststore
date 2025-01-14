const extraDataResolver = {
  Query: {
    extraData: () => {
      return {
        data: "Extra data",
      };
    },
  },
};

export default extraDataResolver;
