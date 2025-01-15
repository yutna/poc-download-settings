import type { FormDataStorageFolderProps } from "./types";

export default function FormDataStorageFolder({
  data,
  disabled,
  onDataSubTypeChange,
  onDataTypeChange,
  onDownloaderFileChange,
}: FormDataStorageFolderProps) {
  return (
    <fieldset>
      <legend>โฟล์เดอร์จัดเก็บข้อมูล</legend>
      <div className="cols group">
        <div className="col">
          <label htmlFor="agencyIdReader">หน่วยงาน</label>
          <select
            disabled
            id="agencyIdReader"
            name="agencyIdReader"
            value={data.agencyId ?? ""}
          >
            {data.agencyOptions.length === 0 && (
              <option disabled value=""></option>
            )}
            {data.agencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label htmlFor="downloaderFileIds">ประเภทไฟล์</label>
          <select
            disabled={disabled}
            id="downloaderFileIds"
            name="downloaderFileIds"
            multiple
            onChange={(e) =>
              onDownloaderFileChange(
                [...e.target.selectedOptions].map((option) =>
                  Number(option.value)
                )
              )
            }
            required
            value={data.downloaderFileIds.map((id) => id.toString())}
          >
            {data.downloaderFileOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="cols group">
        <div className="col">
          <label htmlFor="dataType">ประเภทเนื้อข้อมูล</label>
          <input
            disabled={disabled}
            id="dataType"
            name="dataType"
            onChange={(e) => onDataTypeChange(e.target.value)}
            required
            type="text"
            value={data.dataType}
          />
        </div>
        <div className="col">
          <label htmlFor="dataSubType">ประเภทย่อย</label>
          <input
            disabled={disabled}
            id="dataSubType"
            name="dataSubType"
            onChange={(e) => onDataSubTypeChange(e.target.value)}
            required
            type="text"
            value={data.dataSubType}
          />
        </div>
      </div>
      {data.storagePreview.length > 0 && (
        <div className="group">
          <label htmlFor="storagePreview0">โฟล์เดอร์จัดเก็บข้อมูล</label>
          {data.storagePreview.map((storage, index) => (
            <input
              key={storage}
              defaultValue={storage}
              disabled
              id={`storagePreview${index}`}
              name={`storagePreview${index}`}
              type="text"
            />
          ))}
        </div>
      )}
    </fieldset>
  );
}
