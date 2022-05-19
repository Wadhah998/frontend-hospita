import { Localisation } from "src/app/screens/sign-up/localisation/localisation.module";

export class User{
  public id!: number;
  public typeUser!: String;
  public nom!: String;
  public prenom!: string;
  public email !: string;
  public telephone!: number;
  public loginNumber!:number;
  public password!:number;
  localisation!: Localisation ;
}
