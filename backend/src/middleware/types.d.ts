export interface CustomError extends Error {
  status: number;
}
export type ICreateError = (status: number, message: string) => CustomError;
