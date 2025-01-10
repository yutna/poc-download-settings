import { initialFieldSettingsData } from "@/screens/settings-dataset/constants";

import { type FormDatasetFieldSettingsProps } from "./types";

export default function FormDatasetFieldSettings({
  data,
  onSomeFieldChange,
  onFieldSettingsStatusChange,
  onAppendNewFieldSetting,
}: FormDatasetFieldSettingsProps) {
  return (
    <fieldset>
      <legend>ตั้งค่าฟิลด์</legend>

      {data.map((item, index) => {
        return (
          <fieldset>
            <legend>Field #{index + 1}</legend>
            <div className="group">
              <label htmlFor="someField">someField</label>
              <input
                id="someField"
                name="someField"
                onChange={(e) =>
                  onSomeFieldChange({ index, value: e.target.value })
                }
                required
                type="text"
                value={item.someField}
              />
            </div>

            <input
              checked={item.status}
              id={`status-${index + 1}`}
              name="status"
              onChange={(e) =>
                onFieldSettingsStatusChange({
                  index,
                  value: e.target.checked,
                })
              }
              type="checkbox"
            />
            <label htmlFor={`status-${index + 1}`}>สถานะการใช้งาน</label>
          </fieldset>
        );
      })}

      <button onClick={() => onAppendNewFieldSetting(initialFieldSettingsData)}>
        เพิ่มฟิลด์
      </button>
    </fieldset>
  );
}
