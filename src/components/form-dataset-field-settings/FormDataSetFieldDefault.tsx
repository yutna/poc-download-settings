import type { FormDatasetFieldDefaultProps } from "./types";

export default function FormDatasetFieldDefault({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onSourceOptionSourceColumnChange,
}: FormDatasetFieldDefaultProps) {
  return (
    <>
      <div className="cols group">
        <div className="col">
          <label htmlFor="destinationOptionsType">ชนิดฟิลด์ข้อมูล</label>
          <input
            id="destinationOptionsType"
            name="destinationOptionsType"
            onChange={(e) =>
              onDestinationOptionTypeChange({ index, value: e.target.value })
            }
            required
            disabled={disabled}
            type="text"
            value={data.destinationOptions.type}
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
              onSourceOptionSourceColumnChange({ index, value: e.target.value })
            }
            required
            disabled={disabled}
            type="text"
            value={data.sourceOptions.sourceColumnInput as string}
          />
        </div>
      </div>
    </>
  );
}
