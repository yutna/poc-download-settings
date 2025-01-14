import { FormDatasetChangeAndImportProps } from "./types";

export default function FormDatasetChangeAndImport({
  data,
  disabled,

  onDatasetTransformIdChange,
  onHeaderRowChange,
  onDownloaderIdChange,
  onMetadataIdChange,

  onDestinationUniqueKeyChange,
  onDestinationPartitionColumnChange,
  onDestinationNullOptionChange,
}: FormDatasetChangeAndImportProps) {
  return (
    <fieldset>
      <legend>ข้อมูลการเปลี่ยนแปลงและนำเข้าข้อมูล</legend>

      <div className="group">
        <label htmlFor="datasetTransformId">กระบวนการเปลี่ยนแปลง</label>
        <select
          id="datasetTransformId"
          name="datasetTransformId"
          value={data.datasetTransformId}
          disabled={disabled}
          onChange={(e) => onDatasetTransformIdChange(Number(e.target.value))}
        >
          <option disabled selected value={undefined}>
            -- select an option --
          </option>
          {data.datasetTransformDropdown.map((dropdownItem) => {
            return (
              <option value={dropdownItem.id} key={dropdownItem.id}>
                {dropdownItem.label}
              </option>
            );
          })}
        </select>
      </div>

      <div className="cols group">
        <div className="col">
          <label htmlFor="downloaderId">ชื่อการดาวน์โหลด</label>
          <select
            id="downloaderId"
            name="downloaderId"
            value={data.downloaderId}
            disabled={disabled}
            onChange={(e) => onDownloaderIdChange(Number(e.target.value))}
          >
            <option disabled selected value={undefined}>
              -- select an option --
            </option>
            {data.downloaderDropdown.map((dropdownItem) => {
              return (
                <option value={dropdownItem.id} key={dropdownItem.id}>
                  {dropdownItem.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col">
          <label htmlFor="headerRow">จำนวนบรรทัดส่วนหัว</label>
          <input
            id="headerRow"
            name="headerRow"
            onChange={(e) => onHeaderRowChange(Number(e.target.value))}
            required
            disabled={disabled}
            type="number"
            value={data.headerRow}
          />
        </div>
      </div>

      <div className="cols group">
        <div className="col">
          <label htmlFor="processFiles">ชื่อไฟล์ที่ใช้แปลงข้อมูล</label>
          <select id="processFiles" name="processFiles" disabled={disabled}>
            {data.processFiles.map((item, index) => (
              <option key={`processFiles-${item}-${index}`}>{item}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <label htmlFor="metadataId">ชื่อบัญชีข้อมูล</label>
          <select
            id="metadataId"
            name="metadataId"
            disabled={disabled}
            value={data.metadataId}
            onChange={(e) => onMetadataIdChange(Number(e.target.value))}
          >
            <option disabled selected value={undefined}>
              -- select an option --
            </option>
            {data.metadataDropdown.map((dropdownItem) => {
              return (
                <option value={dropdownItem.id} key={dropdownItem.id}>
                  {dropdownItem.label["en"]}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="group">
        <label htmlFor="datasetDisplay">ชื่อชุดข้อมูลที่เกี่ยวข้อง</label>
        <input
          id="datasetDisplay"
          name="datasetDisplay"
          type="text"
          disabled
          value={data.datasetDisplay}
        />
      </div>

      <div className="group">
        {data.processFolders.length > 0 ? (
          data.processFolders.map((item, index) => (
            <>
              <label htmlFor={`processFolder-${index + 1}`}>
                พาธสำหรับวางไฟล์แปลง และ นำเข้า
              </label>
              <input
                id={`processFolder-${index + 1}`}
                name={`processFolder-${index + 1}`}
                type="text"
                disabled
                value={item}
              />
            </>
          ))
        ) : (
          <>
            <label htmlFor="processFolder">
              พาธสำหรับวางไฟล์แปลง และ นำเข้า
            </label>
            <input
              id="processFolder"
              name="processFolder"
              type="text"
              disabled
            />
          </>
        )}
      </div>

      <div className="cols group">
        {/* TODO: wait for field mapping and also API ? */}
        <div className="col">
          <label htmlFor="destination">ชื่อตารางข้อมูลที่จะนำเข้า</label>
          <select
            id="destination"
            name="destination"
            value={data.destination}
            disabled={disabled}
          // onChange={(e) => onDestinationChange(e.target.value)}
          >
            <option disabled selected value={undefined}>
              -- select an option --
            </option>
          </select>
        </div>

        <div className="col">
          <label htmlFor="destinationUniqueKey">ชื่อ Unique Key ของตาราง</label>
          <input
            id="destinationUniqueKey"
            name="destinationUniqueKey"
            onChange={(e) => onDestinationUniqueKeyChange(e.target.value)}
            type="text"
            disabled={disabled}
            value={data.destinationUniqueKey}
          />
        </div>
      </div>

      <div className="group">
        <label htmlFor="destinationPartitionColumn">
          ชื่อคอลัมน์ที่ใช้ตรวจสอบพาร์ทิชัน
        </label>
        <input
          id="destinationPartitionColumn"
          name="destinationPartitionColumn"
          onChange={(e) => onDestinationPartitionColumnChange(e.target.value)}
          type="text"
          disabled={disabled}
          value={data.destinationPartitionColumn}
        />
      </div>

      <div className="group">
        <label htmlFor="destinationNullOption">
          การตั้งค่า reject null ของข้อมูล
        </label>
        <input
          id="destinationNullOption"
          name="destinationNullOption"
          onChange={(e) => onDestinationNullOptionChange(e.target.value)}
          type="text"
          disabled={disabled}
          value={data.destinationNullOption}
        />
      </div>
    </fieldset>
  );
}
