import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class AccessDeniedSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"ACCESS_DENIED_SYSTEM_ERROR", TMeta> {
  readonly name = "AccessDeniedSystemError";
  readonly code = SYSTEM_ERROR_RECORD.ACCESS_DENIED_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.ACCESS_DENIED_SYSTEM_ERROR.errno;
}
