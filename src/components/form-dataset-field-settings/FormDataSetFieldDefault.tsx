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
          <label htmlFor={`destinationOptionsType-${index}`}>
            ชนิดฟิลด์ข้อมูล
          </label>
          <input
            id={`destinationOptionsType-${index}`}
            name={`destinationOptionsType-${index}`}
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
          <label htmlFor={`sourceOptionsSourceColumn-${index}`}>
            ชื่อฟิลด์ตั้งต้นสำหรับการแปลง
          </label>
          <input
            id={`sourceOptionsSourceColumn-${index}`}
            name={`sourceOptionsSourceColumn-${index}`}
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
