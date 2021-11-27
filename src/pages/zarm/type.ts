/** @format */

export type SeletedIndex = number[];
export type DataItem = {
  value: string | number;
  name: string;
  disabled?: boolean;
  subRegion?: DataItem[];
};
export type Props = {
  value?: SeletedIndex;
  onChange?: (val: string) => void;
};
