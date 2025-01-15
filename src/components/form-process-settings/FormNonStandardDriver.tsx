import type { FormNonStandardDriverProps } from "./types";

export default function FormNonStandardDriver({
  data,
  disabled,
  isSelectFromSettings,
  onDataEntryFormatChange,
  onDeleteParameter,
  onDeleteOldFileChange,
  onDownloaderDriverConfigChange,
  onHasParameterChange,
  onHostChange,
  onParameterChange,
  onPasswordChange,
  onTimeoutSecondsChange,
  onUsernameChange,
  parameterRows,
}: FormNonStandardDriverProps) {
  // Variables
  const isDisabledAdditionalParameters = disabled || !data.hasParameter;
  const isNonStandardFtpSftp = data.driverTemplate === "NON_STANDARD_FTP_SFTP";

  // Functions
  function isLastRow(index: number, key: string, value: string): boolean {
    const isLastRow = index === parameterRows.length - 1;
    const isEmptyKey = key.trim() === "";
    const isEmptyValue = value.trim() === "";

    return isLastRow && isEmptyKey && isEmptyValue;
  }

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
            id="timeoutSeconds"
            name="timeoutSeconds"
            onChange={onTimeoutSecondsChange}
            required
            type="number"
            value={data.timeoutSeconds}
          />
        </div>
      </div>

      {isNonStandardFtpSftp && (
        <>
          <div className="group">
            <label htmlFor="deleteOldFile">ลบไฟล์เก่า</label>
            <input
              disabled={disabled}
              id="deleteOldFile"
              name="deleteOldFile"
              onChange={onDeleteOldFileChange}
              required
              type="number"
              value={data.deleteOldFile}
            />
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
                  defaultValue={data.downloaderDriverConfigId ?? ""}
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
                required
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
                required
                type="text"
                value={data.password}
              />
            </div>
          </div>
        </>
      )}

      <div className="group">
        <input
          disabled={disabled}
          id="hasParameter"
          name="hasParameter"
          onChange={onHasParameterChange}
          type="checkbox"
          checked={data.hasParameter}
        />
        <label htmlFor="hasParameter">Additional parameter</label>
      </div>

      {parameterRows.map(({ key, value }, index) => (
        <div className="cols group" key={`row-${index}`}>
          <div className="col">
            <input
              disabled={isDisabledAdditionalParameters}
              id={`k${index}`}
              name={`k${index}`}
              onChange={(e) => onParameterChange(index, "key", e.target.value)}
              type="text"
              value={key}
            />
          </div>
          <div className="col dynamic-field">
            <input
              disabled={isDisabledAdditionalParameters}
              id={`v${index}`}
              name={`v${index}`}
              onChange={(e) =>
                onParameterChange(index, "value", e.target.value)
              }
              type="text"
              value={value}
            />
            <button
              disabled={
                isDisabledAdditionalParameters || isLastRow(index, key, value)
              }
              onClick={() => onDeleteParameter(index)}
              type="button"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
