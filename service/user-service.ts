// import User from "../domain/user";
//
// export default class Service {
//     private utilizatorRepo: RepoUtilizator;
//     private validator: Validator;
//
//     constructor(utilizatorRepo: RepoUtilizator, validator: Validator) {
//         this.utilizatorRepo = utilizatorRepo;
//         this.validator = validator;
//     }
//
//     creareCont(utilizator: User): void {
//         if (!this.validator.verificareEmailValid(utilizator.email) && this.validator.verificareParola(utilizator.parola)) {
//             this.utilizatorRepo.utilizatori.push()
//         } else {
//             if (this.validator.verificareEmailValid(utilizator.email)) {
//                 throw new InvalidMail('Nu ati scris un mail valid!');
//             }
//             if (this.validator.verificareParola(utilizator.parola)) {
//                 throw new InvalidPassword('Parola nu indeplineste cerintele!');
//             }
//         }
//     }
//
//
// }
