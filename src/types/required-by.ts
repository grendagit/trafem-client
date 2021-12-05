export type RequiredBy<T, U extends keyof T> = Omit<T, U> & Required<Pick<T, U>>
