import type { FormDownloadSettingsProps } from "./types";

export default function FormDownloadSettings({
  data,
  disabled,
  onRetryCountChange,
  onScheduleIntervalChange,
}: FormDownloadSettingsProps) {
  return (
    <fieldset>
      <legend>ตั้งค่าการดาวน์โหลด</legend>
      <div className="cols group">
        <div className="col">
          <label htmlFor="scheduleInterval">การตั้งค่าเวลา Crontab</label>
          <input
            disabled={disabled}
            id="scheduleInterval"
            name="scheduleInterval"
            onChange={(e) => onScheduleIntervalChange(e.target.value)}
            required
            type="text"
            value={data.scheduleInterval}
          />
        </div>
        <div className="col">
          <label htmlFor="timePreview">คำอธิบายการตั้งค่าเวลา</label>
          <input
            disabled
            id="timePreview"
            name="timePreview"
            type="text"
            value={data.timePreview}
          />
        </div>
      </div>
      <div className="group">
        <label htmlFor="retryCount">ตั้งค่าการดาวโหลดซ้ำ</label>
        <input
          disabled={disabled}
          id="retryCount"
          name="retryCount"
          onChange={(e) => onRetryCountChange(Number(e.target.value))}
          required
          type="number"
          value={data.retryCount ?? ""}
        />
      </div>
    </fieldset>
  );
}
