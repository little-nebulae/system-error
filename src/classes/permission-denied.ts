import { SystemError } from "@/classes/system";
import { ERRNO_RECORD } from "@/constants/errno";

export const PERMISSION_DENIED_SYSTEM_ERROR_CODE =
  "PERMISSION_DENIED_SYSTEM_ERROR";
export type PermissionDeniedSystemErrorCode =
  typeof PERMISSION_DENIED_SYSTEM_ERROR_CODE;

export class PermissionDeniedSystemError extends SystemError<PermissionDeniedSystemErrorCode> {
  readonly name = "PermissionDeniedSystemError";
  readonly code = PERMISSION_DENIED_SYSTEM_ERROR_CODE;
  readonly errno = ERRNO_RECORD.EPERM;
}
