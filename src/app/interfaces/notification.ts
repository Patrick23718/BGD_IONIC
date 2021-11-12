export interface Notification {
  imageURL: string;
  prenom: string;
  prestation: string;
  ville: string;
  plageHoraire: string;
  clientId: string;
  accepteMethode: () => void;
  refuseMethode: () => void;
}
