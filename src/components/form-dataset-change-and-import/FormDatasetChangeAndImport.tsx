import { FormDatasetChangeAndImportProps } from "./types";

export default function FormDatasetChangeAndImport({
  data,
  onFieldChange,
  onSomeSelectChange,
}: FormDatasetChangeAndImportProps) {
  return (
    <fieldset>
      <legend>ข้อมูลการเปลี่ยนแปลงและนำเข้าข้อมูล</legend>

      <div className="group">
        <label htmlFor="field1">field1</label>
        <input
          id="field1"
          name="field1"
          onChange={(e) => onFieldChange(e.target.value)}
          required
          type="text"
          value={data.field1}
        />
      </div>

      <div className="col">
        <label htmlFor="someSelect">someSelect</label>
        <select
          // disabled
          id="someSelect"
          name="someSelect"
          value={data.someSelect}
          onChange={(e) => onSomeSelectChange(e.target.value)}
        >
          <option disabled selected value={""}>
            -- select an option --
          </option>
          <option value={"option1"}>option 1</option>
          <option value={"option2"}>option 2</option>
          <option value={"option3"}>option 3</option>
          {/* {data.agencyOptions.map((option) => ( */}
          {/*   <option key={option.value} value={option.value}> */}
          {/*     {option.label} */}
          {/*   </option> */}
          {/* ))} */}
        </select>
      </div>
    </fieldset>
  );
}
