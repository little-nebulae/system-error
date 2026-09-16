import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_CODE_RECORD } from "@/constants/code";

export class PermissionDeniedSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"PERMISSION_DENIED_SYSTEM_ERROR", TMeta> {
  readonly name = "PermissionDeniedSystemError";
  readonly code = SYSTEM_ERROR_CODE_RECORD.PERMISSION_DENIED.code;
  readonly errno = SYSTEM_ERROR_CODE_RECORD.PERMISSION_DENIED.errno;
}
