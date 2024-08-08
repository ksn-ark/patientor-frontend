export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`,
  );
};

export const isObj = (value: unknown): value is object =>
  typeof value === "object";

export const isObjKey = <T extends object>(
  key: string | number | symbol,
  obj: T,
): key is keyof T => key in obj;

export const isString = (value: unknown): value is string =>
  typeof value === "string" || value instanceof String;
