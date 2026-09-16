import type { ValueOf } from "@little-nebulae/type-utils";

import type { ErrnoRecordValue } from "@/constants/errno";

import { ERRNO_RECORD } from "@/constants/errno";

export const SYSTEM_ERROR_CODE_RECORD = {
  PERMISSION_DENIED: {
    code: "PERMISSION_DENIED_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EPERM,
  },
  NO_ENTRY: {
    code: "NO_ENTRY_SYSTEM_ERROR",
    errno: ERRNO_RECORD.ENOENT,
  },
  ACCESS_DENIED: {
    code: "ACCESS_DENIED_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EACCES,
  },
  ALREADY_EXISTED: {
    code: "ALREADY_EXISTED_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EEXIST,
  },
  NOT_DIRECTORY: {
    code: "NOT_DIRECTORY_SYSTEM_ERROR",
    errno: ERRNO_RECORD.ENOTDIR,
  },
  IS_DIRECTORY: {
    code: "IS_DIRECTORY_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EISDIR,
  },
  NAME_TOO_LONG: {
    code: "NAME_TOO_LONG_SYSTEM_ERROR",
    errno: ERRNO_RECORD.ENAMETOOLONG,
  },
  OVERFLOW: {
    code: "OVERFLOW_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EOVERFLOW,
  },
} as const satisfies Record<
  string,
  { code: `${string}_SYSTEM_ERROR`; errno: ErrnoRecordValue }
>;

export type SystemErrorCodeRecord = typeof SYSTEM_ERROR_CODE_RECORD;
export type SystemErrorCodeRecordValue = ValueOf<SystemErrorCodeRecord>;
export type SystemErrorCode = SystemErrorCodeRecordValue["code"];
