import type { DownloaderType, FormGeneralSettingsProps } from "./types";

export default function FormGeneralSettings({
  data,
  disabled,
  onAgencyChange,
  onDownloaderChange,
  onDownloaderDescriptionChange,
  onDownloaderTypeChange,
  onStatusChange,
}: FormGeneralSettingsProps) {
  return (
    <fieldset>
      <legend>ข้อมูลทั่วไป</legend>
      <div className="group">
        <input
          checked={data.status}
          id="status"
          name="status"
          onChange={(e) => onStatusChange(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="status">สถานะการใช้งานทั่วไป</label>
      </div>
      <div className="cols group">
        <div className="col">
          <label htmlFor="downloaderType">ประเภทการดาวน์โหลด</label>
          <select
            disabled={disabled}
            id="downloaderType"
            name="downloaderType"
            onChange={(e) =>
              onDownloaderTypeChange(e.target.value as DownloaderType)
            }
            required
            value={data.downloaderType}
          >
            <option value="external">External</option>
            <option value="internal">Internal</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="downloader">ชื่อการดาวโหลด</label>
          <input
            disabled={disabled}
            id="downloader"
            name="downloader"
            onChange={(e) => onDownloaderChange(e.target.value)}
            required
            type="text"
            value={data.downloader}
          />
        </div>
      </div>
      <div className="group">
        <label htmlFor="agencyId">หน่วยงาน</label>
        <select
          disabled={disabled}
          id="agencyId"
          name="agencyId"
          onChange={(e) => onAgencyChange(Number(e.target.value))}
          required
          value={data.agencyId ?? ""}
        >
          {data.agencyOptions.length === 0 && (
            <option disabled value=""></option>
          )}
          {data.agencyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="group">
        <label htmlFor="downloaderDescription">คำอธิบายเพิ่มเติม</label>
        <textarea
          disabled={disabled}
          id="downloaderDescription"
          name="downloaderDescription"
          onChange={(e) => onDownloaderDescriptionChange(e.target.value)}
          required
          rows={5}
          value={data.downloaderDescription}
        />
      </div>
    </fieldset>
  );
}
