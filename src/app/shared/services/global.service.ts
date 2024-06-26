import { Injectable } from '@angular/core';

export enum EnumLibraries {
  PrimeNG = 'PrimeNG',
  'Angular Material' = 'Angular Material',
  Tie = 'Tie'
}

export interface Results {
  feature: string,
  winner: EnumLibraries,
  link?: string,
  relevance?: number, //If more than none
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
      relevance: 5,
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
          'You can maybe find something Angular Material does not have officially in NPM, but not guaranteed'
        ]
      }
    },
    {
      feature: 'Upgradability',
      relevance: 3,
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
          'Easy to customize with :host ::ng-deep, and you can put all elements you want inside'
        ],
        cons: [
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
    {
      feature: 'Sidebar',
      winner: EnumLibraries.PrimeNG,
      primeNG: {
        pros: [
          'Easy to customize with :host ::ng-deep, and you can put all elements you want inside',
          'Very good looking with few configuration',
          'Lots of configuration and place the sidebar, close button, etc.',
          'You can stablish "visible" property with TS so you can share it with Inputs and service'
        ],
        cons: [
          'Sometimes it is hard to know the classes needed to customize it'
        ]
      },
      angularMaterial: {
        pros: [
          'Basic installation and well explained if focus in same component',
        ],
        cons: [
          'You ought to put more things in the component and outside of it (which can be a problem)',
          'You have to customize more to have a good looking apperance',
          'Not that many configurations'
        ]
      }
    },
    {
      feature: 'Flexibility and customizability',
      winner: EnumLibraries.PrimeNG,
      relevance: 2,
      primeNG: {
        pros: [
          'Althrough sometimes is difficult to find the classes of primeNG components, once you get it, it is really easy to modify',
          'You can do it on the component you want',
          'A lot of variety in content'
        ],
        cons: [
          'Sometimes it is hard to know the classes needed to customize it',
          'If you modify lots of things, it could be a bit unstable'
        ]
      },
      angularMaterial: {
        pros: [
          'Easy to modify some components',
          'Good desing, simple'
        ],
        cons: [
          'Difficult to modify if you want a different product outside "Google style"',
          'Classes are not found easily, nor you can inspect and see the classes, it is more difficult than primeNG'
        ]
      }
    },
    {
      feature: 'Design',
      winner: EnumLibraries['Angular Material'],
      primeNG: {
        pros: [
          'The shape is very good looking'
        ],
        cons: [
          'The behabior and design is not that good'
        ]
      },
      angularMaterial: {
        pros: [
          'Very good looking, soft and neat'
        ]
      }
    },
    {
      feature: 'Stability and consistency',
      winner: EnumLibraries['Angular Material'],
      relevance: 4,
      angularMaterial: {
        pros: [
          'Very good consistency and stable',
          'It has the credibility of Angular and Google, and since we use Angular, it will be very stable'
        ],
        cons: [
          'A bit difficult to modify and always Google style'
        ]
      },
      primeNG: {
        pros: [
          'Easy to customize'
        ],
        cons: [
          'If you are migrating from other device, or you have a different version of PrimeNG, it could be a bit inconsistent'
        ]
      }
    },
    {
      feature: 'Autocomplete',
      winner: EnumLibraries['Angular Material'],
      link: 'autocomplete',
      primeNG: {
        pros: [
          'The shape is very good looking',
          'Lots of features',
          'A Lot of customization',
          'Easy to set up'
        ],
        cons: [
          'Poor guides',
          'Cannot set a fully customizable template easily as putting an initial <code>option</code> before all of the rests, as a <code>None</code> option. It is not well centered if we use margin 0 by default, so we should edit all individually',
          'The directive <code>completeMethod</code> does not work if the input is filled and we delete it all, so it won\'t show the list in that case, so we should make it like in Angular Material',
          'Not possible to have <code>completeMethod</code> to execute when the input is empty, so the panel is not shown when input is written and then removed'
        ]
      },
      angularMaterial: {
        pros: [
          'Soft and neat transactions',
          'Can put a fully customizable template easily',
        ],
        cons: [
          'Few features',
          'Difficult to set up options',
          'Global apperance not so customizable',
        ]
      }
    },
    {
      feature: 'Badge',
      winner: EnumLibraries['Angular Material'],
      link: 'badge',
      angularMaterial: {
        pros: [
          'Much more stable',
          'Very easy to set up',
        ],
        cons: [
          'The content collapses in certain width, it meant to be useful for large numbers but I would prefer to handle it by myself',
        ]
      },
      primeNG: {
        pros: [
          'You can put a badge alone',
          'Content of the badge is easier to modify and put style',
        ],
        cons: [
          'The badge has no overlapping option to avoid be put on a text (but can be solved with some margin',
          'When the content is empty, it is not hidden, so we should put style on it instead'
        ]
      }
    },
  ];

  getResults(): Results[] {
    return this.results;
  }

  constructor() { }
}
