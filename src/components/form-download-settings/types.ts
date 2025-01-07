export interface FormDownloadSettingsData {
  scheduleInterval: string;
  timePreview: string;
  retryCount: number;
}

export interface FormDownloadSettingsProps {
  data: FormDownloadSettingsData;
  disabled: boolean;
  onScheduleIntervalChange: (value: string) => void;
  onRetryCountChange: (value: number) => void;
}
