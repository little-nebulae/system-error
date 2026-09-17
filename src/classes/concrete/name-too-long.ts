import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class NameTooLongSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"NAME_TOO_LONG_SYSTEM_ERROR", TMeta> {
  readonly name = "NameTooLongSystemError";
  readonly code = SYSTEM_ERROR_RECORD.NAME_TOO_LONG_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.NAME_TOO_LONG_SYSTEM_ERROR.errno;
}
