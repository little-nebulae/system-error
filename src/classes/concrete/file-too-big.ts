import type { BaseErrorMeta } from "@little-nebulae/error";

import { SystemError } from "@/classes/abstract";
import { SYSTEM_ERROR_RECORD } from "@/constants";

export class FileTooBigSystemError<
  TMeta extends BaseErrorMeta = null,
> extends SystemError<"FILE_TOO_BIG_SYSTEM_ERROR", TMeta> {
  readonly name = "FileTooBigSystemError";
  readonly code = SYSTEM_ERROR_RECORD.FILE_TOO_BIG_SYSTEM_ERROR.code;
  readonly errno = SYSTEM_ERROR_RECORD.FILE_TOO_BIG_SYSTEM_ERROR.errno;
}
