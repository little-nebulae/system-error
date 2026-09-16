import { BaseError } from "@little-nebulae/error";

import type { ErrnoRecord } from "@/errno";

export abstract class SystemError<TCode extends string> extends BaseError<
  TCode,
  NodeJS.ErrnoException
> {
  // oxlint-disable-next-line unicorn/custom-error-definition
  abstract override readonly name: string;
  abstract override readonly code: TCode;
  abstract readonly errno: ErrnoRecord[keyof ErrnoRecord];
}
