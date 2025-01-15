import type {
  FormDatasetFieldMappingOptionProps,
  KwargsMappingOption,
} from "./types";

export default function FormDatasetFieldMappingOption({
  data,
  index,
  optionIndex,
  disabled,
  isHideDeleteButton,
  onKwargsMappingOptionFieldChange,
  onKwargsMappingOptionDefaultChange,
  onDeleteKwargsMappingOption,
}: FormDatasetFieldMappingOptionProps) {
  return (
    <>
      <div className="cols group">
        <div className="col">
          <label htmlFor={`transformOptionField-${index}`}>
            ชื่อฟิลด์ที่ใช้ตรวจสอบข้อมูล input
          </label>
          <input
            id={`transformOptionField-${index}`}
            name={`transformOptionField-${index}`}
            onChange={(e) =>
              onKwargsMappingOptionFieldChange({
                index,
                optionIndex,
                value: e.target.value,
              })
            }
            required
            disabled={disabled}
            type="text"
            value={(data as KwargsMappingOption).field}
          />
        </div>

        <div className="col">
          <label htmlFor={`transformOptionsDefault-${index}`}>
            การเพิ่มข้อมูลอัตโนมัติ
          </label>
          <input
            id={`transformOptionsDefault-${index}`}
            name={`transformOptionsDefault-${index}`}
            onChange={(e) =>
              onKwargsMappingOptionDefaultChange({
                index,
                optionIndex,
                value: e.target.value,
              })
            }
            required
            disabled={disabled}
            type="text"
            value={(data as KwargsMappingOption).default}
          />
        </div>
      </div>

      {!isHideDeleteButton && (
        <div className="group">
          <button
            onClick={() => onDeleteKwargsMappingOption({ index, optionIndex })}
          >
            -
          </button>
        </div>
      )}
    </>
  );
}
