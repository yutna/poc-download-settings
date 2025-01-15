import type { FormDatasetFieldDateTimeProps, KwargsCustom } from "./types";

export default function FormDatasetFieldDateTime({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onKwargsDateTimeFormatChange,
}: FormDatasetFieldDateTimeProps) {
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
          <label htmlFor={`kwargsDateTimeFormatValue-${index + 1}`}>
            พารามิเตอร์ของการแปลง
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
            disabled={disabled}
            type="text"
            value={
              (data.sourceOptions.transformOptions.kwargs as KwargsCustom).eval
            }
          />
        </div>
      </div>
    </>
  );
}
