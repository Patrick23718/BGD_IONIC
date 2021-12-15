export interface Utilisateur {
  _id?: string;
  uid?: string; //?
  nom: string;
  prenom: string;
  role: string;
  email: string;
  biographie?: string;
  imageURL?: string;
  photoURL?: string; //?
  telephone?: string; //?
  ville?: string;
  status?: string; //!
  numero?: string; //!
  domicile?: boolean;
  deplace?: boolean;
}
