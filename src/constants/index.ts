import type { ValueOf } from "@little-nebulae/type-utils";

import type { ErrnoRecordValue } from "@/constants/errno";

import { ERRNO_RECORD } from "@/constants/errno";

export const SYSTEM_ERROR_RECORD = {
  PERMISSION_DENIED_SYSTEM_ERROR: {
    code: "PERMISSION_DENIED_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EPERM,
  },
  NO_ENTRY_SYSTEM_ERROR: {
    code: "NO_ENTRY_SYSTEM_ERROR",
    errno: ERRNO_RECORD.ENOENT,
  },
  ACCESS_DENIED_SYSTEM_ERROR: {
    code: "ACCESS_DENIED_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EACCES,
  },
  ALREADY_EXISTED_SYSTEM_ERROR: {
    code: "ALREADY_EXISTED_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EEXIST,
  },
  NOT_DIRECTORY_SYSTEM_ERROR: {
    code: "NOT_DIRECTORY_SYSTEM_ERROR",
    errno: ERRNO_RECORD.ENOTDIR,
  },
  IS_DIRECTORY_SYSTEM_ERROR: {
    code: "IS_DIRECTORY_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EISDIR,
  },
  NAME_TOO_LONG_SYSTEM_ERROR: {
    code: "NAME_TOO_LONG_SYSTEM_ERROR",
    errno: ERRNO_RECORD.ENAMETOOLONG,
  },
  OVERFLOW_SYSTEM_ERROR: {
    code: "OVERFLOW_SYSTEM_ERROR",
    errno: ERRNO_RECORD.EOVERFLOW,
  },
} as const satisfies Record<
  `${string}_SYSTEM_ERROR`,
  { code: `${string}_SYSTEM_ERROR`; errno: ErrnoRecordValue }
>;

export type SystemErrorRecord = typeof SYSTEM_ERROR_RECORD;
export type SystemErrorRecordValue = ValueOf<SystemErrorRecord>;
export type SystemErrorCode = SystemErrorRecordValue["code"];
