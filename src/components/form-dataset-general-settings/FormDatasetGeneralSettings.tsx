import type { FormDatasetGeneralSettingsProps } from "./types";

export default function FormDatasetGeneralSettings({
  data,
  disabled,
  onDatasetChange,
  onDatasetDescriptionChange,
  onDatasetGeneralSettingStatusChange,
}: FormDatasetGeneralSettingsProps) {
  return (
    <fieldset>
      <legend>ข้อมูลทั่วไป</legend>
      <div className="group">
        <label htmlFor="dataset">ชื่อชุดข้อมูล</label>
        <input
          id="dataset"
          name="dataset"
          onChange={(e) => onDatasetChange(e.target.value)}
          required
          disabled={disabled}
          type="text"
          value={data.dataset}
        />
        <label htmlFor="datasetDescription">คำอธิบายเพิ่มเติม</label>
        <input
          id="datasetDescription"
          name="datasetDescription"
          onChange={(e) => onDatasetDescriptionChange(e.target.value)}
          required
          disabled={disabled}
          type="text"
          value={data.datasetDescription}
        />
        <input
          checked={data.status}
          id="datasetGeneralSettingStatus"
          name="datasetGeneralSettingStatus"
          onChange={(e) =>
            onDatasetGeneralSettingStatusChange(e.target.checked)
          }
          type="checkbox"
          disabled={disabled}
        />
        <label htmlFor="datasetGeneralSettingStatus">สถานะการใช้งาน</label>
      </div>
    </fieldset>
  );
}
