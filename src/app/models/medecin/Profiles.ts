export class Medecins {
    telephone! : number;
    email!: string
    cin!: number
    speciality!: string;
    password!: string;
    nom!: string;
    id!: number

    constructor(telephone: number, email: string ,cin : number, speciality : string, password: string, nom : string, id : number ){
        this.telephone = telephone;
        this.email = email;
        this.cin = cin;
        this.speciality = speciality;
        this.password = password;
        this.nom = nom;
        this.id = id;
    }
}