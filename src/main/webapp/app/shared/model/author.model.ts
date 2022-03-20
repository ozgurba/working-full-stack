import dayjs from 'dayjs';

export interface IAuthor {
  id?: number;
  name?: string;
  dateofBirth?: string | null;
}

export const defaultValue: Readonly<IAuthor> = {};
