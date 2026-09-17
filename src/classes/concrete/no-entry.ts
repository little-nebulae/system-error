import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class NoEntrySystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"NO_ENTRY_SYSTEM_ERROR", TMeta> {
  readonly name = "NoEntrySystemError";
  readonly code = SYSTEM_ERROR_RECORD.NO_ENTRY_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.NO_ENTRY_SYSTEM_ERROR.errno;
}
