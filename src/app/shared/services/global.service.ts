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
      feature: 'Flexibility and customizability',
      winner: EnumLibraries['PrimeNG'],
      relevance: 3,
      angularMaterial: {
        pros: [
          'Can edit the basics, with the properties given',
        ],
        cons: [
          'If you want to customize all, it is really difficult to change it from one property',
        ]
      },
      primeNG: {
        pros: [
          'Very easy to customize with the properties given',
          'If you cannot customize the components with the properties or templates, you can use <code>:host :ng-deep</code> to customize the elements you want in particular',
        ],
      }
    },
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
      feature: 'Base Design',
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
      relevance: 5,
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
      winner: EnumLibraries['Tie'],
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
          'Not possible to have <code>completeMethod</code> to execute when the input is empty, so the panel is not shown when input is written and then removed. <span class="text-red-600">This is a must have condition in my opinion, at least as a directive</span>'
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
          'The content collapses in certain width, it mean to be useful for large numbers but I would prefer to handle it by myself',
        ]
      },
      primeNG: {
        pros: [
          'You can put a badge alone',
          'Content of the badge is easier to modify and put style',
        ],
        cons: [
          'The badge has no overlapping option to avoid be put on a text (but can be solved with some margin)',
          'When the content is empty, it is not hidden, so we should put style on it instead'
        ]
      }
    },
    {
      feature: 'Calendar',
      winner: EnumLibraries['PrimeNG'],
      link: 'calendar',
      angularMaterial: {
        pros: [
          'Better design in range dates',
        ],
        cons: [
          'Cannot modify so much the calendar',
          'Time not included, so you should use third party components to use it',
          'Difficult to set up the format of the date'
        ]
      },
      primeNG: {
        pros: [
          'Lots of features',
          'Very customizable',
          'Can put time and customize the panel and input',
          'You can select the date format you want',
          'Easy to set up'
        ]
      }
    },
    {
      feature: 'Chips',
      winner: EnumLibraries['Angular Material'],
      link: 'chips',
      angularMaterial: {
        pros: [
          'Can edit the chips',
          'More visual and can put placeholder for new items',
        ],
        cons: [
          'More complicated to set up',
        ]
      },
      primeNG: {
        pros: [
          'Very easy to set up'
        ],
        cons: [
          'Cannot edit a chip. You must delete and define another one',
          'Not responsive by default',
          'On Android <span class="text-red-600">IT DOES NOT WORK</span>'
        ]
      }
    },
    {
      feature: 'Dialog',
      winner: EnumLibraries['PrimeNG'],
      link: 'dialog',
      angularMaterial: {
        pros: [
          'Good aspect by default',
        ],
        cons: [
          'Not so much directives nor customization',
          'You have to create and call another component for the dialog',
          'Sharing information between these components may be more tedious',
        ]
      },
      primeNG: {
        pros: [
          'Lots of directives as dragging and resize',
          'You can customize all',
          'You can put the code that goes inside the dialog in the same component, so the sharing is direct and easier'
        ],
      }
    },
    {
      feature: 'Drag & Drop',
      winner: EnumLibraries['Angular Material'],
      link: 'drag-drop',
      angularMaterial: {
        pros: [
          'Fully customizable',
          'Available for every element',
          'Lots of directives',
          'Neat and soft',
          'Easy to set up',
          'You can put the element wherever you want',
        ],
      },
      primeNG: {
        pros: [
          'Drag list is useful and really similar to Angular Material',
        ],
        cons: [
          'Very orthopedic style on drag',
          'Difficult to customize',
        ]
      }
    },
    {
      feature: 'Button Group',
      winner: EnumLibraries['Tie'],
      link: 'button-group',
      angularMaterial: {
        pros: [
          'Easy to set up',
          'You can put the template you like'
        ],
      },
      primeNG: {
        pros: [
          'Easy to set up',
          'You can put the template you like'
        ],
      }
    },
    {
      feature: 'List box',
      winner: EnumLibraries['PrimeNG'],
      link: 'listbox',
      angularMaterial: {
        pros: [
          'Easy to set up',
          'You can put the template you like'
        ],
        cons: [
          'Only possible with the checkbox. You cannot remove it is much more difficult to apply background to the item when selected'
        ]
      },
      primeNG: {
        pros: [
          'Easy to set up',
          'You can put the template you like',
          'You can customize the list and even filter it'
        ],
      }
    },
    {
      feature: 'Paginator',
      winner: EnumLibraries['Angular Material'],
      link: 'paginator',
      angularMaterial: {
        pros: [
          'Easy to set up',
          'Complete and all in the same component'
        ],
      },
      primeNG: {
        pros: [
          'More options to customize and directives'
        ],
      }
    },
    {
      feature: 'Panel (accordion)',
      winner: EnumLibraries['Tie'],
      link: 'panel',
      angularMaterial: {
        pros: [
          'Easy to set up',
          'Very smooth animation'
        ],
      },
      primeNG: {
        pros: [
          'Easy to customize style',
          "Can choose to open/close tabs with buttons outside or with a method"
        ],
        cons: [
          'When clicking on the icon to toggle, it does not open, you have to click outside it',
        ]
      }
    },
  ];

  getResults(): Results[] {
    return this.results;
  }

  constructor() {}
}
