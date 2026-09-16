import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

import type { SystemErrorCode } from "@/constants/code";
import type { ErrnoRecordValue } from "@/constants/errno";

export abstract class SystemError<
  TCode extends SystemErrorCode,
  TMeta extends BaseErrorMeta = null,
> extends BaseError<TCode, NodeJS.ErrnoException, TMeta> {
  // oxlint-disable-next-line unicorn/custom-error-definition
  abstract override readonly name: string;
  abstract override readonly code: TCode;
  abstract readonly errno: ErrnoRecordValue;
}
