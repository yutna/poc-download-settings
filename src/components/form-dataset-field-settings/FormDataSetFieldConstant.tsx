import type { FormDatasetFieldConstantProps } from "./types";

export default function FormDatasetFieldConstant({
  data,
  index,
  disabled,
  onDestinationOptionType,
  onSourceOptionSourceColumn,
}: FormDatasetFieldConstantProps) {
  return (
    <>
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
              onSourceOptionSourceColumn({ index, value: e.target.value })
            }
            required
            disabled={disabled}
            type="text"
            value={data.sourceOptions.sourceColumnInput}
          />
        </div>
      </div>
    </>
  );
}
