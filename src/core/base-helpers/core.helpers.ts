export const enumForSwagger = <T>(inputEnum: T, name: string) => {
  const enumRecord: Record<string, unknown> = {};
  Object.keys(inputEnum).forEach((key) => {
    enumRecord[key] = inputEnum[key];
  });
  return { enum: enumRecord, enumName: name };
};
