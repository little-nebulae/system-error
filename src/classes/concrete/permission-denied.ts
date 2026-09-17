import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class PermissionDeniedSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"PERMISSION_DENIED_SYSTEM_ERROR", TMeta> {
  readonly name = "PermissionDeniedSystemError";
  readonly code = SYSTEM_ERROR_RECORD.PERMISSION_DENIED_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.PERMISSION_DENIED_SYSTEM_ERROR.errno;
}
