import type { FormDatasetFieldMappingProps } from "./types";

export default function FormDatasetFieldMapping({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onKwargsMappingFieldNameChange,
  onKwargsMappingInputValidationFieldChange,
  onSourceOptionSourceColumnChange,
}: FormDatasetFieldMappingProps) {
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

      <div className="cols group">
        <div className="col">
          <label htmlFor="destinationOptionsType">
            ชื่อตารางที่ใช้ในการ map ข้อมูล
          </label>
          <input
            id="destinationOptionsType"
            name="destinationOptionsType"
            // onChange={(e) =>
            //   onDestinationOptionTypeChange({ index, value: e.target.value })
            // }
            required
            disabled={disabled}
            type="text"
          // value={data.destinationOptions.type}
          />
        </div>

        <div className="col">
          <label htmlFor={`inputFieldValidation-${index}`}>
            ชื่อฟิลด์ที่ใช้ตรวจสอบข้อมูล input
          </label>
          <input
            id={`inputFieldValidation-${index}`}
            name={`inputFieldValidation-${index}`}
            onChange={(e) =>
              onKwargsMappingInputValidationFieldChange({
                index,
                value: e.target.value,
              })
            }
            required
            disabled={disabled}
            type="text"
          // value={data.sourceOptions.sourceColumnInput as string}
          />
        </div>
      </div>

      <div className="cols group">
        <div className="col">
          <label htmlFor="destinationOptionsType">ชื่อฟิลด์ที่จะนำไปใช้</label>
          <input
            id="destinationOptionsType"
            name="destinationOptionsType"
            onChange={(e) =>
              onKwargsMappingFieldNameChange({ index, value: e.target.value })
            }
            required
            disabled={disabled}
            type="text"
          // value={data.sourceOptions.transformOptions.kwargs.}
          />
        </div>

        <div className="col">
          <label htmlFor="sourceOptionsSourceColumn">
            การเปิดปิดฟังก์นการเพิ่มข้อมูลสถานี
          </label>
          <input
            id="sourceOptionsSourceColumn"
            name="sourceOptionsSourceColumn"
            // onChange={(e) =>
            //   onSourceOptionSourceColumnChange({ index, value: e.target.value })
            // }
            required
            disabled={disabled}
            type="text"
          // value={data.sourceOptions.sourceColumnInput as string}
          />
        </div>
      </div>
    </>
  );
}
