export type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends { [_ in keyof T]: infer U } ? ({} extends U ? never : U) : never;

export type OmitFromKnownKeys<T, K extends keyof T> = KnownKeys<T> extends infer U ?
  [U] extends [keyof T] ? Pick<T, Exclude<U, K>>:
  never : never;
