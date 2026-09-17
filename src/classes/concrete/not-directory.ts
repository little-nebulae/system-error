import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class NotDirectorySystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"NOT_DIRECTORY_SYSTEM_ERROR", TMeta> {
  readonly name = "NotDirectorySystemError";
  readonly code = SYSTEM_ERROR_RECORD.NOT_DIRECTORY_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.NOT_DIRECTORY_SYSTEM_ERROR.errno;
}
