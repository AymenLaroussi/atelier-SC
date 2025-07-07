export interface Participant {
  id?: number;
  nom: string;
  email: string;
}

export interface Atelier {
  id: number;
  titre: string;
  description?: string;
  formateur_id?: number;
  created: string; 
}
