import type { FormDatasetFieldConstantProps, KwargsConstant } from "./types";

export default function FormDatasetFieldConstant({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onKwargsConstantValueChange,
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
              onDestinationOptionTypeChange({ index, value: e.target.value })
            }
            required
            disabled={disabled}
            type="text"
            value={data.destinationOptions.type}
          />
        </div>

        <div className="col">
          <label htmlFor={`kwargsConstantValue-${index + 1}`}>
            พารามิเตอร์ของการแปลง
          </label>
          <input
            id={`kwargsConstantValue-${index + 1}`}
            name={`kwargsConstantValue-${index + 1}`}
            onChange={(e) =>
              onKwargsConstantValueChange({
                index,
                value: {
                  value: Number(e.target.value),
                },
              })
            }
            required
            disabled={disabled}
            type="number"
            value={
              (data.sourceOptions.transformOptions.kwargs as KwargsConstant)
                .value
            }
          />
        </div>
      </div>
    </>
  );
}
