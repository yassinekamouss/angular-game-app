import {Enfant} from './enfant';

export interface Parent {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  enfants: Enfant[];
}
