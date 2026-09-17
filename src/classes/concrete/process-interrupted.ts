import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class ProcessInterruptedSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"PROCESS_INTERRUPTED_SYSTEM_ERROR", TMeta> {
  readonly name = "ProcessInterruptedSystemError";
  readonly code = SYSTEM_ERROR_RECORD.PROCESS_INTERRUPTED_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.PROCESS_INTERRUPTED_SYSTEM_ERROR.errno;
}
