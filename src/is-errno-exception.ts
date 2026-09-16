import { isError } from "@little-nebulae/error";

export function isErrnoException(
  error: unknown,
): error is NodeJS.ErrnoException {
  if (isError(error) && Object.hasOwn(error, "errno")) {
    return true;
  }
  return false;
}
