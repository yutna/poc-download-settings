import type { DownloaderDriverType, FormProcessSettingsProps } from "./types";

export default function FormProcessSettings({
  data,
  disabled,
  onDownloaderDriverType,
}: FormProcessSettingsProps) {
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
              onDownloaderDriverType(e.target.value as DownloaderDriverType)
            }
            value={data.downloaderDriverType}
          >
            <option value="standard">Standard</option>
            <option value="non_standard">Non-Standard</option>
            <option value="post_processing">Post Processing</option>
          </select>
        </div>
        <div className="col"></div>
      </div>
    </fieldset>
  );
}
