import { Injectable } from '@angular/core';

export enum EnumLibraries {
  PrimeNG = 'PrimeNG',
  'Angular Material' = 'Angular Material',
  Tie = 'Tie'
}

export interface Results {
  feature: string,
  winner: EnumLibraries,
  primeNG?: {
    pros?: string[],
    cons?: string[],
  },
  angularMaterial?: {
    pros?: string[],
    cons?: string[],
  },
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private results: Results[] = [
    {
      feature: 'Variety',
      winner: EnumLibraries.PrimeNG,
      primeNG: {
        pros: [
          'There are plenty of components. Nearly everything you need, you have it',
          'Most components are soft and neat components'
        ],
        cons: [
          'There are bugs and hard to customize sometimes'
        ]
      },
      angularMaterial: {
        pros: [
          'There are just the amount of components needed. No extra ones',
          'Very soft components and very good looking',
        ],
        cons: [
          'If you want to do something sightly different, you have to make a new component by yourself or use PrimeNG in the component you need',
          'You can maybe find something Angular Material does mot have officially in NPM, but not guaranteed'
        ]
      }
    },
    {
      feature: 'Upgradability',
      winner: EnumLibraries['Angular Material'],
      primeNG: {
        pros: [
          'You can always see a lot of examples of all types',
        ],
        cons: [
          'Official web does not explain that good and there are not that much resources',
          'To upgrade it, you need to wait to the Angular version that is adapted to the primeNG version'
        ]
      },
      angularMaterial: {
        pros: [
          'Angular Material always comes by the hand of Angular, so you can always update it',
          'Lots of resources in internet for it',
        ],
        cons: [
          'Just a few of examples of each resource, but can be supplied on internet'
        ]
      }
    },
    {
      feature: 'Buttons and icons',
      winner: EnumLibraries['Angular Material'],
      primeNG: {
        pros: [
          'Easy to customize with ::ng-deep, and you can put all elements you want inside'
        ],
        cons: [
          'Difficult to customize. To change color, you ought to put ::ng-deep',
          'Icons are way less than Angular Material, which are from Google generally',
          'Apperance is not that good by default, you have to modify it to make it good looking'
        ]
      },
      angularMaterial: {
        pros: [
          'Easy to customize, if you do not want the default color, you can set a custom class called \"mat-CLASS_YOU_LIKE\", so you can customize it well',
          'Colors and effects are very neat. Transitions and hovers are very good looking',
          'There are plenty of icons to choose, and you can place them easily with a property called \"iconPositionEnd\" if you want it on the right',
          'You can put as many things as you want in the button'
        ],
        cons: [
          'Some properties are hard to customize and you cannot use Tailwind in the main component of the button, it should be inside'
        ]
      }
    },
  ];

  getResults(): Results[] {
    return this.results;
  }

  constructor() { }
}
