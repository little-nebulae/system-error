import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class AlreadyExistedSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"ALREADY_EXISTED_SYSTEM_ERROR", TMeta> {
  readonly name = "AlreadyExistedSystemError";
  readonly code = SYSTEM_ERROR_RECORD.ALREADY_EXISTED_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.ALREADY_EXISTED_SYSTEM_ERROR.errno;
}
