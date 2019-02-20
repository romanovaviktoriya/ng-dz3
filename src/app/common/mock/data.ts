import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/*export interface IHotel = {
  img: string,
  address: string,
  phone:  number,
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  },
  type: string
};*/

export interface Hotel {
  img: string;
  address: string;
  phone: number;
}

export interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface Voluptatem {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface Widget {
  hotel: Hotel;
  weather: Weather;
  voluptatem: Voluptatem;
  type: string;
}

export const data: Widget[] = [
  {
    hotel: {
      img: 'assets/images/novoross.jpg',
      address: 'Новороссийск',
      phone:  79182445566
    },
    weather: {
      title: 'Солнечно',
      icon: 'assets/images/cloudy.png',
      water: 20,
      temperature: 14
    },
    voluptatem: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/novoross2.jpg',
      followers: 1225,
      following: 1761
    },
    type: 'hero'
  },
  {
    hotel: {
      img: 'assets/images/sankt-peterburg.jpg',
      address: 'Санкт-Петербург',
      phone:  79213381245
    },
    weather: {
      title: 'Не жарко...',
      icon: 'assets/images/cloudy.png',
      water: 0,
      temperature: -4
    },
    voluptatem: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/sankt-peterburg2.jpg',
      followers: 1550,
      following: 19005
    },
    type: 'old'
  },
  {
    hotel: {
      img: 'assets/images/moscow.jpg',
      address: 'Москва',
      phone:  74952251466
    },
    weather: {
      title: 'Прохладно',
      icon: 'assets/images/cloudy.png',
      water: 5,
      temperature: 2
    },
    voluptatem: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/moscow2.jpg',
      followers: 17195,
      following: 158004
    },
    type: 'old'
  },
  {
    hotel: {
      img: 'assets/images/kazan.jpg',
      address: 'Казань',
      phone:  79502251478
    },
    weather: {
      title: 'Прохладно',
      icon: 'assets/images/cloudy.png',
      water: 15,
      temperature: 12
    },
    voluptatem: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/kazan2.jpg',
      followers: 15588,
      following: 5513
    },
    type: 'old'
  }
];

export const data$: Observable<Widget[]> = of(data)
  .pipe(delay(3000));
