import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class IsDirectorySystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"IS_DIRECTORY_SYSTEM_ERROR", TMeta> {
  readonly name = "IsDirectorySystemError";
  readonly code = SYSTEM_ERROR_RECORD.IS_DIRECTORY_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.IS_DIRECTORY_SYSTEM_ERROR.errno;
}
