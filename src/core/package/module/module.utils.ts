export const flattenModule = (arrayCompound: any[], property: string) => {
  const flatArray = arrayCompound
    .map((item) => (item ? item[property] : undefined))
    .filter((e) => e !== undefined);
  const mergeValues = flatArray.reduce(
    (previous, current) => ({
      ...previous,
      ...current,
    }),
    // eslint-disable-next-line object-curly-newline
    {},
  );

  return mergeValues;
};
