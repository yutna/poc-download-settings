import type { FormPostProcessingDriverProps } from "./types";

export default function FormPostProcessingDriver({
  data,
  disabled,
  onCommandSetChange,
  onHostChange,
}: FormPostProcessingDriverProps) {
  return (
    <>
      <div className="group">
        <label htmlFor="host">โฮส</label>
        <input
          disabled={disabled}
          id="host"
          name="host"
          onChange={onHostChange}
          required
          type="text"
          value={data.host}
        />
      </div>
      <div className="group">
        <label htmlFor="commandSet">ชุดคำสั่ง</label>
        <textarea
          disabled={disabled}
          id="commandSet"
          name="commandSet"
          onChange={onCommandSetChange}
          value={data.commandSet}
        />
      </div>
    </>
  );
}
