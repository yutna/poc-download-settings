import { z } from "zod";

export const settingsDownloaderSchema = z.object({
  agencyId: z.number().int().positive(), //
  dataSubType: z
    .string()
    .min(1, "dataSubType cannot be an empty string")
    .refine(
      (value) => !value.includes(" ") && !value.includes("_"),
      "dataSubType cannot contain spaces or underscores"
    ),
  dataType: z
    .string()
    .min(1, "dataType cannot be an empty string")
    .refine(
      (value) => !value.includes(" ") && !value.includes("_"),
      "dataType cannot contain spaces or underscores"
    ),
  downloader: z.string().min(1, "downloader cannot be an empty string"),
  downloaderDescription: z
    .string()
    .min(1, "downloaderDescription cannot be an empty string"),
  downloaderDriver: z.object({
    additionalFields: z.record(z.string().min(1), z.string().min(1)).optional(),
    downloaderDriverType: z.enum([
      "STANDARD",
      "NON_STANDARD",
      "POST_PROCESSING",
    ]),
    fields: z.record(z.string().min(1), z.string().min(1)).optional(),
    host: z.string().url().min(1, "host cannot be an empty string"),
    timeoutSeconds: z.number().int().positive(),
    driverId: z.number().int().positive(),
  }),
  downloaderFileIds: z.array(z.number().int().positive()).min(1),
  downloaderType: z.enum(["INTERNAL", "EXTERNAL"]),
  retryCount: z.number().int().nonnegative(),
  scheduleInterval: z
    .string()
    .min(1, "scheduleInterval cannot be an empty string"),
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export type SettingsDownloaderSchema = z.infer<typeof settingsDownloaderSchema>;
