import type { FormDatasetFieldCustomProps, KwargsCustom } from "./types";

export default function FormDatasetFieldCustom({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onKwargsCustomEvalChange,
}: FormDatasetFieldCustomProps) {
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
          <label htmlFor={`kwargsCustomValue-${index + 1}`}>
            พารามิเตอร์ของการแปลง
          </label>
          <input
            id={`kwargsCustomValue-${index + 1}`}
            name={`kwargsCustomValue-${index + 1}`}
            onChange={(e) =>
              onKwargsCustomEvalChange({
                index,
                value: {
                  eval: e.target.value,
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
