import { Localisation } from './localisation/localisation.module';
export class User_parent{

    public typeUser= "ولي";
    public familyName!: string; 
    public name!: string;
    public loginNumber!: string;
    public telephone!: string;
    public email!: string;
    public password! : string;
    
    
    localisation!: Localisation | null;

 

}