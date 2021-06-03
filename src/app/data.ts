/*Файл, в котором содержится база данных для приложения
*/
//пишем сюда свои сведения
import { Mydata } from './dataclasses';
import { Study } from './dataclasses';
import { Hobby } from './dataclasses';



    const mydatas: Mydata[] = [
      { id: 1, info: 'JAMK oppilas' },
      { id: 2, info: 'Asuu Taavetissa' },
      { id: 3, info: 'Tykkää ottaa aurinkoa' },
      { id: 4, info: 'Lempiruoka on kakku' },
      { id: 5, info: 'Odotan kesää' },
    ];
    //Tähän voi laittaa studies-taulukon
    const studdatas: Study[] = [
      { id: 1, info: 'Oppilaitos - Jyväskylän ammatikorkeakoulu' },
      { id: 2, info: 'Kurssi -Web-kehittäjä' },
      { id: 3, info: 'Oppitunti -Frontend-sovelluskehitys' },
    ];
    const hobdatas: Hobby[] = [
      { id: 1, info: 'Hiihto' },
      { id: 2, info: 'Lukeminen' },
      { id: 3, info: 'Sarjan katsominen' },
    ];
    //импортируем все базы данных
export {mydatas, studdatas, hobdatas};
