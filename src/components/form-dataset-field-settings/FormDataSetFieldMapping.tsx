import FormDatasetFieldMappingOption from "./FormDataSetFieldMappingOption";
import { initialKwargsMappingOption } from "@/screens/settings-dataset/constants";

import type { FormDatasetFieldMappingProps, KwargsMapping } from "./types";

export default function FormDatasetFieldMapping({
  data,
  index,
  disabled,
  onDestinationOptionTypeChange,
  onKwargsMappingFieldNameChange,
  onKwargsMappingInputValidationFieldChange,
  onKwargsMappingIsCustomFunctionChange,
  onKwargsMappingOptionFieldChange,
  onKwargsMappingOptionDefaultChange,
  onAppendNewKwargsMappingOption,
  onDeleteKwargsMappingOption,
  onSourceOptionSourceColumnChange,
}: FormDatasetFieldMappingProps) {
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

      <div className="cols group">
        <div className="col">
          <label htmlFor={`sourceOptionsDestinationMap-${index}`}>
            ชื่อตารางที่ใช้ในการ map ข้อมูล
          </label>
          <input
            id={`sourceOptionsDestinationMap-${index}`}
            name={`sourceOptionsDestinationMap-${index}`}
            // onChange={(e) =>
            //   onDestinationOptionTypeChange({ index, value: e.target.value })
            // }
            required
            disabled={disabled}
            type="text"
          // value={data.destinationOptions.type}
          />

          {/* <select */}
          {/*   id={`sourceOptionsDestinationMap-${index}`} */}
          {/*   name={`sourceOptionsDestinationMap-${index}`} */}
          {/*   value={data.sourceOptions.transformOptions.method} */}
          {/*   disabled={disabled} */}
          {/*   onChange={(e) => */}
          {/*     onSourceOptionTransformMethodChange({ */}
          {/*       index, */}
          {/*       value: e.target.value as TransformOptionsMethods, */}
          {/*     }) */}
          {/*   } */}
          {/* > */}
          {/*   {transformOptionsMethods.map((method) => { */}
          {/*     return ( */}
          {/*       <option */}
          {/*         value={method} */}
          {/*         key={`transformOptionsMethod-${method}`} */}
          {/*         selected={method === TransformOptionsMethods.DEFAULT} */}
          {/*       > */}
          {/*         {method} */}
          {/*       </option> */}
          {/*     ); */}
          {/*   })} */}
          {/* </select> */}
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
            value={
              (data.sourceOptions.transformOptions.kwargs as KwargsMapping)
                .inputFieldValidation
            }
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
            value={
              (data.sourceOptions.transformOptions.kwargs as KwargsMapping)
                .fieldName
            }
          />
        </div>

        <div className="col">
          <label htmlFor={`mappingIsCustomFunction-${index}`}>
            การเปิดปิดฟังก์นการเพิ่มข้อมูลสถานี
          </label>

          <select
            id={`mappingIsCustomFunction-${index}`}
            name={`mappingIsCustomFunction-${index}`}
            value={
              (data.sourceOptions.transformOptions.kwargs as KwargsMapping)
                .isCustomFunction === true
                ? "true"
                : "false"
            }
            disabled={disabled}
            onChange={(e) =>
              onKwargsMappingIsCustomFunctionChange({
                index,
                value: e.target.value === "true" ? true : false,
              })
            }
          >
            <option value={"true"}>true</option>
            <option value={"false"} selected>
              false
            </option>
          </select>
        </div>
      </div>

      {(
        data.sourceOptions.transformOptions.kwargs as KwargsMapping
      ).options.map((item, optionIndex) => {
        const optionLength = (
          data.sourceOptions.transformOptions.kwargs as KwargsMapping
        ).options.length;

        return (
          <FormDatasetFieldMappingOption
            data={item}
            disabled={disabled}
            index={index}
            optionIndex={optionIndex}
            onKwargsMappingOptionFieldChange={onKwargsMappingOptionFieldChange}
            onKwargsMappingOptionDefaultChange={
              onKwargsMappingOptionDefaultChange
            }
            onDeleteKwargsMappingOption={onDeleteKwargsMappingOption}
            isHideDeleteButton={optionLength === index + 1}
          />
        );
      })}

      {(data.sourceOptions.transformOptions.kwargs as KwargsMapping)
        .isCustomFunction && (
          <button
            onClick={() =>
              onAppendNewKwargsMappingOption({
                index,
                value: initialKwargsMappingOption,
              })
            }
          >
            +
          </button>
        )}
    </>
  );
}
