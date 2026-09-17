import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class ResourceBusySystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"RESOURCE_BUSY_SYSTEM_ERROR", TMeta> {
  readonly name = "ResourceBusySystemError";
  readonly code = SYSTEM_ERROR_RECORD.RESOURCE_BUSY_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.RESOURCE_BUSY_SYSTEM_ERROR.errno;
}
