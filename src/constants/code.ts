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
} as const satisfies Record<
  string,
  { code: `${string}_SYSTEM_ERROR`; errno: ErrnoRecordValue }
>;
