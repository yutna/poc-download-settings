import { z } from "zod";

export const settingsDownloaderSchema = z.object({
  agencyId: z.number().int().positive(), //
  dataSubType: z.string(),
  dataType: z.string(),
  downloader: z.string(),
  downloaderDescription: z.string(),
  downloaderDriver: z.object({
    additionalFields: z.record(z.string(), z.string()).optional(),
    downloaderDriverType: z.enum([
      "STANDARD",
      "NON_STANDARD",
      "POST_PROCESSING",
    ]),
    fields: z.record(z.string(), z.string()).optional(),
    host: z.string().url(),
    timeoutSeconds: z.number().int().positive(),
    driverId: z.number().int().positive(),
  }),
  downloaderFileIds: z.array(z.number().int().positive()).min(1),
  downloaderType: z.enum(["INTERNAL", "EXTERNAL"]),
  retryCount: z.number().int().nonnegative(),
  scheduleInterval: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export type SettingsDownloaderSchema = z.infer<typeof settingsDownloaderSchema>;
