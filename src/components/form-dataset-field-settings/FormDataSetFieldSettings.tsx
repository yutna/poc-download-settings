import {
  initialFieldSettingsData,
  transformOptionsMethods,
} from "@/screens/settings-dataset/constants";

import FormDatasetFieldConstant from "./FormDataSetFieldConstant";
// import FormDatasetFieldCustom from "./FormDataSetFieldCustom";
import FormDatasetFieldDefault from "./FormDataSetFieldDefault";
import { TransformOptionsMethods } from "./types";

import type { FormDatasetFieldSettingsProps } from "./types";
import FormDatasetFieldCustom from "./FormDataSetFieldCustom";
import FormDatasetFieldDateTime from "./FormDataSetFieldDateTime";
import FormDatasetFieldMapping from "./FormDataSetFieldMapping";

export default function FormDatasetFieldSettings({
  data,
  disabled,

  onDestinationColumnChange,
  onSourceOptionTransformMethodChange,
  onDestinationOptionTypeChange,
  onSourceOptionSourceColumnChange,
  onFieldSettingsStatusChange,
  onAppendNewFieldSetting,

  // Kwargs Action
  onKwargsConstantValueChange,
  onKwargsCustomEvalChange,
  onKwargsDateTimeFormatChange,
  onKwargsMappingFieldNameChange,
  onKwargsMappingInputValidationFieldChange,
}: FormDatasetFieldSettingsProps) {
  return (
    <fieldset>
      <legend>ตั้งค่าฟิลด์</legend>

      {data.map((item, index) => {
        return (
          <fieldset key={`datasetField-${index + 1}`}>
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
                  disabled={disabled}
                  type="text"
                  value={item.destinationColumn}
                />
              </div>

              <div className="col">
                <label htmlFor="sourceOptionsTransformMethod">
                  กระบวนการเปลี่ยนแปลง
                </label>
                <select
                  id="sourceOptionsTransformMethod"
                  name="sourceOptionsTransformMethod"
                  value={item.sourceOptions.transformOptions.method}
                  disabled={disabled}
                  onChange={(e) =>
                    onSourceOptionTransformMethodChange({
                      index,
                      value: e.target.value as TransformOptionsMethods,
                    })
                  }
                >
                  {transformOptionsMethods.map((method) => {
                    return (
                      <option
                        value={method}
                        key={`transformOptionsMethod-${method}`}
                        selected={method === TransformOptionsMethods.DEFAULT}
                      >
                        {method}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {item.sourceOptions.transformOptions.method ===
              TransformOptionsMethods.DEFAULT && (
                <FormDatasetFieldDefault
                  data={item}
                  disabled={disabled}
                  index={index}
                  onDestinationOptionTypeChange={onDestinationOptionTypeChange}
                  onSourceOptionSourceColumnChange={
                    onSourceOptionSourceColumnChange
                  }
                />
              )}

            {item.sourceOptions.transformOptions.method ===
              TransformOptionsMethods.CONSTANT && (
                <FormDatasetFieldConstant
                  data={item}
                  disabled={disabled}
                  index={index}
                  onDestinationOptionTypeChange={onDestinationOptionTypeChange}
                  onKwargsConstantValueChange={onKwargsConstantValueChange}
                />
              )}

            {item.sourceOptions.transformOptions.method ===
              TransformOptionsMethods.CUSTOM && (
                <FormDatasetFieldCustom
                  data={item}
                  disabled={disabled}
                  index={index}
                  onDestinationOptionTypeChange={onDestinationOptionTypeChange}
                  onKwargsCustomEvalChange={onKwargsCustomEvalChange}
                />
              )}

            {item.sourceOptions.transformOptions.method ===
              TransformOptionsMethods.DATE_TIME && (
                <FormDatasetFieldDateTime
                  data={item}
                  disabled={disabled}
                  index={index}
                  onDestinationOptionTypeChange={onDestinationOptionTypeChange}
                  onKwargsDateTimeFormatChange={onKwargsDateTimeFormatChange}
                  onSourceOptionSourceColumnChange={
                    onSourceOptionSourceColumnChange
                  }
                />
              )}

            {item.sourceOptions.transformOptions.method ===
              TransformOptionsMethods.MAPPING && (
                <FormDatasetFieldMapping
                  data={item}
                  disabled={disabled}
                  index={index}
                  onDestinationOptionTypeChange={onDestinationOptionTypeChange}
                  onKwargsMappingFieldNameChange={onKwargsMappingFieldNameChange}
                  onKwargsMappingInputValidationFieldChange={
                    onKwargsMappingInputValidationFieldChange
                  }
                  onSourceOptionSourceColumnChange={
                    onSourceOptionSourceColumnChange
                  }
                />
              )}

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
              disabled={disabled}
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
