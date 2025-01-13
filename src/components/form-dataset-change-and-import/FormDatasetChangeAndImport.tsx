import { FormDatasetChangeAndImportProps } from "./types";

export default function FormDatasetChangeAndImport({
  data,

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
          onChange={(e) => onDatasetTransformIdChange(Number(e.target.value))}
        >
          <option disabled selected value={undefined}>
            -- select an option --
          </option>
          {data.datasetTransformDropdown.map((dropdownItem) => {
            return (
              <option value={dropdownItem.id}>{dropdownItem.label}</option>
            );
          })}
        </select>
      </div>

      <div className="cols group">
        {/* TODO: wait for field mapping and also API ? */}
        <div className="col">
          <label htmlFor="todo-1">ชื่อไฟล์ที่ใช้แปลงข้อมูล</label>
          <select
            id="todo-1"
            name="todo-1"
          // value={data.todo-1}
          // onChange={(e) => onTodo1Change(e.target.value)}
          >
            <option disabled selected value={""}>
              -- select an option --
            </option>
          </select>
        </div>

        <div className="col">
          <label htmlFor="headerRow">จำนวนบรรทัดส่วนหัว</label>
          <input
            id="headerRow"
            name="headerRow"
            onChange={(e) => onHeaderRowChange(Number(e.target.value))}
            required
            type="number"
            value={data.headerRow}
          />
        </div>
      </div>

      <div className="cols group">
        <div className="col">
          <label htmlFor="downloaderId">ชื่อการดาวน์โหลด</label>
          <select
            id="downloaderId"
            name="downloaderId"
            value={data.downloaderId}
            onChange={(e) => onDownloaderIdChange(Number(e.target.value))}
          >
            <option disabled selected value={undefined}>
              -- select an option --
            </option>
            {data.downloaderDropdown.map((dropdownItem) => {
              return (
                <option value={dropdownItem.id}>{dropdownItem.label}</option>
              );
            })}
          </select>
        </div>

        <div className="col">
          <label htmlFor="metadataId">ชื่อบัญชีข้อมูล</label>
          <select
            id="metadataId"
            name="metadataId"
            value={data.metadataId}
            onChange={(e) => onMetadataIdChange(Number(e.target.value))}
          >
            <option disabled selected value={undefined}>
              -- select an option --
            </option>
            {data.metadataDropdown.map((dropdownItem) => {
              return (
                <option value={dropdownItem.id}>{dropdownItem.label}</option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="group">
        {/* TODO: wait for field mapping and also API ? */}
        <label htmlFor="todo-2">ชื่อชุดข้อมูลที่เกี่ยวข้อง</label>
        <input
          id="todo-2"
          name="todo-2"
          // onChange={(e) => onTodo2Change(e.target.value)}
          // required
          type="text"
        // value={data.headerRow}
        />
      </div>

      <div className="cols group">
        {/* TODO: wait for field mapping and also API ? */}
        <div className="col">
          <label htmlFor="destination">ชื่อตารางข้อมูลที่จะนำเข้า</label>
          <select
            id="destination"
            name="destination"
            value={data.destination}
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
          value={data.destinationNullOption}
        />
      </div>
    </fieldset>
  );
}
