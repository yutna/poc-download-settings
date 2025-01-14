import type { FormDatasetGeneralSettingsProps } from "./types";

export default function FormDatasetGeneralSettings({
  data,
  disabled,
  onDatasetChange,
  onDatasetDescriptionChange,
}: FormDatasetGeneralSettingsProps) {
  return (
    <fieldset>
      <legend>ข้อมูลทั่วไป</legend>
      <div className="group">
        <label htmlFor="dataset">ชื่อชุดข้อมูล</label>
        <input
          id="dataset"
          name="dataset"
          onChange={(e) => onDatasetChange(e.target.value)}
          required
          disabled={disabled}
          type="text"
          value={data.dataset}
        />
        <label htmlFor="datasetDescription">คำอธิบายเพิ่มเติม</label>
        <input
          id="datasetDescription"
          name="datasetDescription"
          onChange={(e) => onDatasetDescriptionChange(e.target.value)}
          required
          disabled={disabled}
          type="text"
          value={data.datasetDescription}
        />
      </div>
      {/* <div className="cols group"> */}
      {/*   <div className="col"> */}
      {/*     <label htmlFor="downloaderType">ประเภทการดาวน์โหลด</label> */}
      {/*     <select */}
      {/*       disabled={disabled} */}
      {/*       id="downloaderType" */}
      {/*       name="downloaderType" */}
      {/*       onChange={(e) => */}
      {/*         onDownloaderTypeChange(e.target.value as DownloaderType) */}
      {/*       } */}
      {/*       required */}
      {/*       value={data.downloaderType} */}
      {/*     > */}
      {/*       <option value="external">External</option> */}
      {/*       <option value="internal">Internal</option> */}
      {/*     </select> */}
      {/*   </div> */}
      {/*   <div className="col"> */}
      {/*     <label htmlFor="downloader">ชื่อการดาวโหลด</label> */}
      {/*     <input */}
      {/*       disabled={disabled} */}
      {/*       id="downloader" */}
      {/*       name="downloader" */}
      {/*       onChange={(e) => onDownloaderChange(e.target.value)} */}
      {/*       required */}
      {/*       type="text" */}
      {/*       value={data.downloader} */}
      {/*     /> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className="group"> */}
      {/*   <label htmlFor="agencyId">หน่วยงาน</label> */}
      {/*   <select */}
      {/*     disabled={disabled} */}
      {/*     id="agencyId" */}
      {/*     name="agencyId" */}
      {/*     onChange={(e) => onAgencyChange(Number(e.target.value))} */}
      {/*     required */}
      {/*     value={data.agencyId} */}
      {/*   > */}
      {/*     {data.agencyOptions.map((option) => ( */}
      {/*       <option key={option.value} value={option.value}> */}
      {/*         {option.label} */}
      {/*       </option> */}
      {/*     ))} */}
      {/*   </select> */}
      {/* </div> */}
      {/* <div className="group"> */}
      {/*   <label htmlFor="downloaderDescription">คำอธิบายเพิ่มเติม</label> */}
      {/*   <textarea */}
      {/*     disabled={disabled} */}
      {/*     id="downloaderDescription" */}
      {/*     name="downloaderDescription" */}
      {/*     onChange={(e) => onDownloaderDescriptionChange(e.target.value)} */}
      {/*     required */}
      {/*     rows={5} */}
      {/*     value={data.downloaderDescription} */}
      {/*   /> */}
      {/* </div> */}
    </fieldset>
  );
}
