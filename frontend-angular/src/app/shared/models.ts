export interface Participant {
  id?: number;
  nom: string;
  email: string;
  password: string;
}

export interface Formateur {
  id: number;
  nom: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Atelier {
  id: number;
  titre: string;
  description?: string;
  formateur_id?: number;
  created_at: string;
  updated_at?: string;
  formateur?: Formateur;
  participants?: Participant[];
}
