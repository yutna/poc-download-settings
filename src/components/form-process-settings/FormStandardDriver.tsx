import type { FormStandardDriverProps } from "./types";

export default function FormStandardDriver({
  data,
  disabled,
  isSelectFromSettings,
  onDataEntryFormatChange,
  onDownloaderDriverConfigChange,
  onHostChange,
  onPasswordChange,
  onTimeoutSecondsChange,
  onUsernameChange,
}: FormStandardDriverProps) {
  return (
    <>
      <div className="cols group">
        <div className="col">
          <label htmlFor="host">โฮส</label>
          <input
            disabled={disabled}
            id="host"
            name="host"
            onChange={onHostChange}
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
            onChange={onTimeoutSecondsChange}
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
            onChange={onDataEntryFormatChange}
            required
            value={data.dataEntryFormat}
          >
            <option value="SELF_FILL_DATA_ENTRY">กรอกข้อมูลด้วยตัวเอง</option>
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
              onChange={onDownloaderDriverConfigChange}
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
            onChange={onUsernameChange}
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
            onChange={onPasswordChange}
            type="text"
            value={data.password}
          />
        </div>
      </div>
    </>
  );
}
