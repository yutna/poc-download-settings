import FormPostProcessingDriver from "./FormPostProcessingDriver";
import FormStandardDriver from "./FormStandardDriver";

import type {
  DataEntryFormat,
  DownloaderDriverType,
  FormProcessSettingsProps,
} from "./types";

export default function FormProcessSettings({
  data,
  disabled,
  onCommandSetChange,
  onDataEntryFormatChange,
  onDownloaderDriverConfigChange,
  onDownloaderDriverTypeChange,
  onDriverChange,
  onHostChange,
  onPasswordChange,
  onTimeoutSecondsChange,
  onUsernameChange,
}: FormProcessSettingsProps) {
  // Variables
  const isPostProcessingDriver =
    data.downloaderDriverType === "POST_PROCESSING";
  const isSelectFromSettings = data.dataEntryFormat === "SELECT_FROM_SETTINGS";
  const isStandardDriver = data.downloaderDriverType === "STANDARD";

  return (
    <fieldset>
      <legend>ตั้งค่ากระบวนการ</legend>
      <div className="cols group">
        <div className="col">
          <label htmlFor="downloaderDriverType">รูปแบบกระบวณการ</label>
          <select
            disabled={disabled}
            id="downloaderDriverType"
            name="downloaderDriverType"
            onChange={(e) =>
              onDownloaderDriverTypeChange(
                e.target.value as DownloaderDriverType
              )
            }
            required
            value={data.downloaderDriverType}
          >
            <option value="STANDARD">Standard</option>
            <option value="NON_STANDARD">Non-Standard</option>
            <option value="POST_PROCESSING">Post Processing</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="driverId">ชื่อไดรเวอร์</label>
          <select
            disabled={disabled}
            id="driverId"
            name="driverId"
            onChange={(e) => onDriverChange(Number(e.target.value))}
            required
            value={data.driverId}
          >
            {data.driverOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Case 1 */}
      {isStandardDriver && (
        <FormStandardDriver
          data={data}
          disabled={disabled}
          isSelectFromSettings={isSelectFromSettings}
          onDataEntryFormatChange={(e) =>
            onDataEntryFormatChange(e.target.value as DataEntryFormat)
          }
          onDownloaderDriverConfigChange={(e) =>
            onDownloaderDriverConfigChange(Number(e.target.value))
          }
          onHostChange={(e) => onHostChange(e.target.value)}
          onPasswordChange={(e) => onPasswordChange(e.target.value)}
          onTimeoutSecondsChange={(e) =>
            onTimeoutSecondsChange(Number(e.target.value))
          }
          onUsernameChange={(e) => onUsernameChange(e.target.value)}
        />
      )}

      {/* Case 3 */}
      {isPostProcessingDriver && (
        <FormPostProcessingDriver
          data={data}
          disabled={disabled}
          onCommandSetChange={(e) => onCommandSetChange(e.target.value)}
          onHostChange={(e) => onHostChange(e.target.value)}
        />
      )}
    </fieldset>
  );
}
