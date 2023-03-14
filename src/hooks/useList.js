import { useState } from "react";

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);
  const [sortValues, setSortValues] = useState(initialValue);

  // Push item
  const push = (item) => {
    setValue((oldList) => [...oldList, item]);
    setSortValues((oldSortValues) => [...oldSortValues, item]);
  };

  // Remove item
  const remove = (index) => {
    setValue((oldList) => oldList.filter((_, i) => i !== index));
    setSortValues((oldSortValues) =>
      oldSortValues.filter((_, i) => i !== index)
    );
  };

  // Sort list
  const sortList = () => {
    const sorted = [...sortValues].sort();
    setSortValues(sorted);
  };

  // Reverse list
  const reverseList = () => {
    const reversed = [...sortValues].reverse();
    setSortValues(reversed);
  };

  // Clear list
  const clearList = () => {
    setValue([]);
    setSortValues([]);
  };

  // Is Empty
  const isEmpty = () => value.length === 0;

  return { value, sortValues, setValue, push, remove, sortList, reverseList, clearList, isEmpty };
};

export default useList;
