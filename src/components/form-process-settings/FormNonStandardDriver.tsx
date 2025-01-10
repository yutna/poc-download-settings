import type { FormNonStandardDriverProps } from "./types";

export default function FormNonStandardDriver({
  data,
  disabled,
  onDeleteParameter,
  onHasParameterChange,
  onHostChange,
  onParameterChange,
  onTimeoutSecondsChange,
  parameterRows,
}: FormNonStandardDriverProps) {
  // Variables
  const isDisabledAdditionalParameters = disabled || !data.hasParameter;

  // Functions
  function isLastRow(index: number, key: string, value: string): boolean {
    const isLastRow = index === parameterRows.length - 1;
    const isEmptyKey = key.trim() === "";
    const isEmptyValue = value.trim() === "";

    return isLastRow && isEmptyKey && isEmptyValue;
  }

  return (
    <>
      <div className="cols group">
        <div className="col">
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
        <div className="col">
          <label htmlFor="timeoutSeconds">Timout</label>
          <input
            disabled={disabled}
            id="timeoutSeconds"
            name="timeoutSeconds"
            onChange={onTimeoutSecondsChange}
            required
            type="number"
            value={data.timeoutSeconds}
          />
        </div>
      </div>

      <div className="group">
        <input
          disabled={disabled}
          id="hasParameter"
          name="hasParameter"
          onChange={onHasParameterChange}
          type="checkbox"
          checked={data.hasParameter}
        />
        <label htmlFor="hasParameter">Additional parameter</label>
      </div>

      {parameterRows.map(({ key, value }, index) => (
        <div className="cols group" key={`row-${index}`}>
          <div className="col">
            <input
              disabled={isDisabledAdditionalParameters}
              id={`k${index}`}
              name={`k${index}`}
              onChange={(e) => onParameterChange(index, "key", e.target.value)}
              type="text"
              value={key}
            />
          </div>
          <div className="col dynamic-field">
            <input
              disabled={isDisabledAdditionalParameters}
              id={`v${index}`}
              name={`v${index}`}
              onChange={(e) =>
                onParameterChange(index, "value", e.target.value)
              }
              type="text"
              value={value}
            />
            <button
              disabled={
                isDisabledAdditionalParameters || isLastRow(index, key, value)
              }
              onClick={() => onDeleteParameter(index)}
              type="button"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
