import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class OverflowSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"OVERFLOW_SYSTEM_ERROR", TMeta> {
  readonly name = "OverflowSystemError";
  readonly code = SYSTEM_ERROR_RECORD.OVERFLOW_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.OVERFLOW_SYSTEM_ERROR.errno;
}
