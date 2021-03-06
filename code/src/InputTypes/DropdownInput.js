import React from "react"

const DropdownInput = ({
  setAnswers,
  answers,
  alternatives,
  index,
  setDummy
}) => {
  return (
    <select
      onChange={event => {
        let tempAnswers = answers
        tempAnswers[index] = event.target.value
        setAnswers(tempAnswers)
        setDummy(event.target.value); /* dummy variabel force re-render as setAnswer don't */
      }}
    >
      {alternatives.map(alt => (
        <option value={alt} key={alt}>
          {alt}
        </option>
      ))}
    </select>
  );
};

export default DropdownInput
