import type {
  DataEntryFormat,
  DownloaderDriverType,
  FormProcessSettingsProps,
} from "./types";

export default function FormProcessSettings({
  data,
  disabled,
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
  const isStandardDriver = data.downloaderDriverType === "STANDARD";
  const isSelectFromSettings = data.dataEntryFormat === "SELECT_FROM_SETTINGS";

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
        <>
          <div className="cols group">
            <div className="col">
              <label htmlFor="host">โฮส</label>
              <input
                disabled={disabled}
                id="host"
                name="host"
                onChange={(e) => onHostChange(e.target.value)}
                required
                type="text"
                value={data.host}
              />
            </div>
            <div className="col">
              <label htmlFor="timeoutSeconds">Timout</label>
              <input
                disabled={disabled}
                is="timeoutSeconds"
                name="timeoutSeconds"
                onChange={(e) => onTimeoutSecondsChange(Number(e.target.value))}
                required
                type="number"
                value={data.timeoutSeconds}
              />
            </div>
          </div>
          <div className="cols group">
            <div className="col">
              <label htmlFor="dataEntryFormat">รูปแบบการกรอกข้อมูล</label>
              <select
                disabled={disabled}
                id="dataEntryFormat"
                name="dataEntryFormat"
                onChange={(e) =>
                  onDataEntryFormatChange(e.target.value as DataEntryFormat)
                }
                required
                value={data.dataEntryFormat}
              >
                <option value="SELF_FILL_DATA_ENTRY">
                  กรอกข้อมูลด้วยตัวเอง
                </option>
                <option value="SELECT_FROM_SETTINGS">เลือกจากการตั้งค่า</option>
              </select>
            </div>
            {isSelectFromSettings && (
              <div className="col">
                <label htmlFor="downloaderDriverConfigId">Config Name</label>
                <select
                  disabled={disabled}
                  id="downloaderDriverConfigId"
                  name="downloaderDriverConfigId"
                  onChange={(e) =>
                    onDownloaderDriverConfigChange(Number(e.target.value))
                  }
                  required
                  value={data.downloaderDriverConfigId}
                >
                  <option disabled value=""></option>
                  {data.downloaderDriverConfigOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="cols group">
            <div className="col">
              <label htmlFor="username">Username</label>
              <input
                disabled={disabled || isSelectFromSettings}
                id="username"
                name="username"
                onChange={(e) => onUsernameChange(e.target.value)}
                type="text"
                value={data.username}
              />
            </div>
            <div className="col">
              <label htmlFor="password">Password</label>
              <input
                disabled={disabled || isSelectFromSettings}
                id="password"
                name="password"
                onChange={(e) => onPasswordChange(e.target.value)}
                type="text"
                value={data.password}
              />
            </div>
          </div>
        </>
      )}
    </fieldset>
  );
}
