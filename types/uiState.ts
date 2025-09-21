export interface UiState {
  showStatusDropdown: boolean;
  showPriorityDropdown: boolean;
  showAssigneeDropdown: boolean;
  showDatePicker: boolean;
  currentMonth: Date;
  selectedDate: number | null;
  showQuickOptions: boolean;
}
