import {Student} from './student';

export interface Parent {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  enfants: Student[];
}
