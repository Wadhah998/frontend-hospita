export class Patient {
  id: number;
  name: string;
  image: string;
  age: number;
  state: string;
  email: string;
  phone: number;

  constructor(
    id: number,
    name: string,
    image: string,
    age: number,
    state: string,
    email: string,
    phone: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.age = age;
    this.state = state;
    this.email = email;
    this.phone = phone;
  }
}
