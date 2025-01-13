import { initialFieldSettingsData } from "@/screens/settings-dataset/constants";

import { type FormDatasetFieldSettingsProps } from "./types";

export default function FormDatasetFieldSettings({
  data,
  onDestinationColumnChange,
  onSourceOptionTransformMethodChange,
  onDestinationOptionType,
  onSourceOptionSourceColumn,
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
            <div className="cols group">
              <div className="col">
                <label htmlFor="destinationColumn">
                  ชื่อคอลัมน์ที่จะนำข้อมูลเข้า
                </label>
                <input
                  id="destinationColumn"
                  name="destinationColumn"
                  onChange={(e) =>
                    onDestinationColumnChange({ index, value: e.target.value })
                  }
                  required
                  type="text"
                  value={item.destinationColumn}
                />
              </div>

              <div className="col">
                <label htmlFor="sourceOptionsTransformMethod">
                  กระบวนการเปลี่ยนแปลง
                </label>
                <input
                  id="sourceOptionsTransformMethod"
                  name="sourceOptionsTransformMethod"
                  onChange={(e) =>
                    onSourceOptionTransformMethodChange({
                      index,
                      value: e.target.value,
                    })
                  }
                  required
                  type="text"
                  value={item.sourceOptions.transform.method}
                />
              </div>
            </div>

            <div className="cols group">
              <div className="col">
                <label htmlFor="destinationOptionsType">ชนิดฟิลด์ข้อมูล</label>
                <input
                  id="destinationOptionsType"
                  name="destinationOptionsType"
                  onChange={(e) =>
                    onDestinationOptionType({ index, value: e.target.value })
                  }
                  required
                  type="text"
                  value={item.destinationOptions.type}
                />
              </div>

              <div className="col">
                <label htmlFor="sourceOptionsSourceColumn">
                  ชื่อฟิลด์ตั้งต้นสำหรับการแปลง
                </label>
                <input
                  id="sourceOptionsSourceColumn"
                  name="sourceOptionsSourceColumn"
                  onChange={(e) =>
                    onSourceOptionSourceColumn({ index, value: e.target.value })
                  }
                  required
                  type="text"
                  value={item.sourceOptions.sourceColumn}
                />
              </div>
            </div>

            <input
              checked={item.destinationOptions.status}
              id={`sourceOptionStatus-${index + 1}`}
              name="sourceOptionStatus"
              onChange={(e) =>
                onFieldSettingsStatusChange({
                  index,
                  value: e.target.checked,
                })
              }
              type="checkbox"
            />
            <label htmlFor={`sourceOptionStatus-${index + 1}`}>
              สถานะการใช้งาน
            </label>
          </fieldset>
        );
      })}

      <button onClick={() => onAppendNewFieldSetting(initialFieldSettingsData)}>
        เพิ่มฟิลด์
      </button>
    </fieldset>
  );
}
