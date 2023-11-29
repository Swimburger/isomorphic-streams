import { ReadableStream } from "../src/node";

export async function expectStreamOf<T>(
  actual: ReadableStream<T>,
  ...expected: T[]
): Promise<void> {
  const values = [];
  for await (const value of actual) {
    values.push(value);
  }
  expect(values).toStrictEqual(expected);
}
