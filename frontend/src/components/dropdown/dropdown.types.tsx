export interface DropdownItems {
  name: string;
  value: string;
}
export interface DropdownProps {
  dropdownPlaceholder: string;
  items: DropdownItems[];
  onSelect: (value: string) => void;
}
