import type { FormDatasetFieldDateTimeProps, KwargsDateTime } from "./types";

export default function FormDatasetFieldDateTime({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onKwargsDateTimeFormatChange,
  onSourceOptionSourceColumnChange,
}: FormDatasetFieldDateTimeProps) {
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

      <div className="col">
        <label htmlFor={`kwargsDateTimeFormatValue-${index + 1}`}>
          รูปแบบของวันเวลา
        </label>
        <input
          id={`kwargsDateTimeFormatValue-${index + 1}`}
          name={`kwargsDateTimeFormatValue-${index + 1}`}
          onChange={(e) =>
            onKwargsDateTimeFormatChange({
              index,
              value: {
                format: e.target.value,
              },
            })
          }
          required
          disabled={
            !(data.sourceOptions.transformOptions.kwargs as KwargsDateTime)
              .isCustom
          }
          type="text"
          value={
            (data.sourceOptions.transformOptions.kwargs as KwargsDateTime)
              .format
          }
        />
      </div>
    </>
  );
}
