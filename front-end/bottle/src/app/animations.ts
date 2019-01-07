import { animation, trigger, state, style, animate, transition, sequence, keyframes, query, stagger } from '@angular/animations';


export const basicOpacityInOutAnimationTrigger = trigger('basicOpacity', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.65s ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.3, offset: 0.3 }),
        style({ opacity: 0.6, offset: 0.6 }),
        style({ opacity: 1, offset: 1 }),
      ]))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('0.5s ease-in', style({ opacity: 0 }))
    ]),
  ]);
