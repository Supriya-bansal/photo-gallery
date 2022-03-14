import { IPhoto } from './Photo';

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
  photos?: IPhoto[];
}
