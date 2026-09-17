import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class OutOfMemorySystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"OUT_OF_MEMORY_SYSTEM_ERROR", TMeta> {
  readonly name = "OutOfMemorySystemError";
  readonly code = SYSTEM_ERROR_RECORD.OUT_OF_MEMORY_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.OUT_OF_MEMORY_SYSTEM_ERROR.errno;
}
