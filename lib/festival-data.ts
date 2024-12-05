import { Stage, Event } from './types';
import { parseAustralianTime } from './date-utils';

export const stages: Stage[] = [
  { id: '1', name: 'Stage 1' },
  { id: '2', name: 'Stage 2' },
  { id: '3', name: 'Stage 3' },
  { id: '4', name: 'Stage 4' },
  { id: '5', name: 'Stage 5' },
  { id: '666', name: 'Stage 666' },
];

export const events: Event[] = [
  // Stage 1
  { id: '101', title: 'Korn', start: parseAustralianTime('20:30'), end: parseAustralianTime('21:45'), room: '1' },
  { id: '102', title: 'Electric Callboy', start: parseAustralianTime('19:30'), end: parseAustralianTime('20:30'), room: '1' },
  { id: '103', title: 'Violent Femmes', start: parseAustralianTime('18:30'), end: parseAustralianTime('19:30'), room: '1' },
  { id: '104', title: 'Jet', start: parseAustralianTime('17:30'), end: parseAustralianTime('18:30'), room: '1' },
  { id: '105', title: 'Mastodon', start: parseAustralianTime('16:30'), end: parseAustralianTime('17:30'), room: '1' },
  { id: '106', title: 'Northlane', start: parseAustralianTime('15:45'), end: parseAustralianTime('16:30'), room: '1' },
  { id: '107', title: 'The Living End', start: parseAustralianTime('15:00'), end: parseAustralianTime('15:45'), room: '1' },
  { id: '108', title: '311', start: parseAustralianTime('14:15'), end: parseAustralianTime('15:00'), room: '1' },
  { id: '109', title: 'Bowling For Soup', start: parseAustralianTime('13:30'), end: parseAustralianTime('14:15'), room: '1' },
  { id: '110', title: 'Loathe', start: parseAustralianTime('12:45'), end: parseAustralianTime('13:30'), room: '1' },

  // Stage 2
  { id: '201', title: 'Electric Callboy', start: parseAustralianTime('19:30'), end: parseAustralianTime('20:30'), room: '2' },
  { id: '202', title: 'Jet', start: parseAustralianTime('17:30'), end: parseAustralianTime('18:30'), room: '2' },
  { id: '203', title: 'Northlane', start: parseAustralianTime('15:45'), end: parseAustralianTime('16:30'), room: '2' },
  { id: '204', title: '311', start: parseAustralianTime('14:15'), end: parseAustralianTime('15:00'), room: '2' },
  { id: '205', title: 'Loathe', start: parseAustralianTime('12:45'), end: parseAustralianTime('13:30'), room: '2' },

  // Stage 3
  { id: '301', title: 'Billy Corgan', start: parseAustralianTime('20:10'), end: parseAustralianTime('21:10'), room: '3' },
  { id: '302', title: 'Sleeping With Sirens', start: parseAustralianTime('18:30'), end: parseAustralianTime('19:20'), room: '3' },
  { id: '303', title: 'L7', start: parseAustralianTime('17:00'), end: parseAustralianTime('17:45'), room: '3' },
  { id: '304', title: 'Frank Turner', start: parseAustralianTime('15:30'), end: parseAustralianTime('16:15'), room: '3' },
  { id: '305', title: 'The Butterfly Effect', start: parseAustralianTime('14:10'), end: parseAustralianTime('14:50'), room: '3' },
  { id: '306', title: 'Imminence', start: parseAustralianTime('12:50'), end: parseAustralianTime('13:30'), room: '3' },

  // Stage 4
  { id: '401', title: 'Kerry King', start: parseAustralianTime('19:20'), end: parseAustralianTime('20:10'), room: '4' },
  { id: '402', title: 'The Gaslight Anthem', start: parseAustralianTime('17:45'), end: parseAustralianTime('18:30'), room: '4' },
  { id: '403', title: 'Dragon', start: parseAustralianTime('16:15'), end: parseAustralianTime('17:00'), room: '4' },
  { id: '404', title: 'Alpha Wolf', start: parseAustralianTime('14:50'), end: parseAustralianTime('15:30'), room: '4' },
  { id: '405', title: 'From Ashes to New', start: parseAustralianTime('13:30'), end: parseAustralianTime('14:10'), room: '4' },
  { id: '406', title: 'Aviva', start: parseAustralianTime('12:20'), end: parseAustralianTime('12:50'), room: '4' },

  // Stage 5
  { id: '501', title: 'Highly Suspect', start: parseAustralianTime('19:40'), end: parseAustralianTime('20:25'), room: '5' },
  { id: '502', title: 'Religa', start: parseAustralianTime('18:40'), end: parseAustralianTime('19:20'), room: '5' },
  { id: '503', title: 'Grandson', start: parseAustralianTime('17:40'), end: parseAustralianTime('18:20'), room: '5' },
  { id: '504', title: 'Killing Heidi', start: parseAustralianTime('16:35'), end: parseAustralianTime('17:25'), room: '5' },
  { id: '505', title: 'Taylor Acorn', start: parseAustralianTime('15:40'), end: parseAustralianTime('16:20'), room: '5' },
  { id: '506', title: 'Alex Lahey', start: parseAustralianTime('14:40'), end: parseAustralianTime('15:20'), room: '5' },
  { id: '507', title: 'Inertia', start: parseAustralianTime('13:50'), end: parseAustralianTime('14:20'), room: '5' },
  { id: '508', title: 'Pyrefly', start: parseAustralianTime('13:00'), end: parseAustralianTime('13:30'), room: '5' },

  // Stage 666
  { id: '601', title: 'AM/PM DJs', start: parseAustralianTime('19:30'), end: parseAustralianTime('23:59'), room: '666' },
  { id: '602', title: 'Kill Your Pop Stars Karaoke Band', start: parseAustralianTime('17:40'), end: parseAustralianTime('19:30'), room: '666' },
  { id: '603', title: 'Oozing Future Freaks Now', start: parseAustralianTime('16:50'), end: parseAustralianTime('17:40'), room: '666' },
  { id: '604', title: 'You Good Things Got Talent Final', start: parseAustralianTime('16:00'), end: parseAustralianTime('16:50'), room: '666' },
  { id: '605', title: 'Kill Your Pop Stars Karaoke Band', start: parseAustralianTime('15:50'), end: parseAustralianTime('16:00'), room: '666' },
  { id: '606', title: 'Air Guitar Competition', start: parseAustralianTime('15:00'), end: parseAustralianTime('15:50'), room: '666' },
  { id: '607', title: 'Watermelon Eating Competition', start: parseAustralianTime('14:20'), end: parseAustralianTime('15:00'), room: '666' },
  { id: '608', title: 'AM/PM DJs', start: parseAustralianTime('13:50'), end: parseAustralianTime('14:20'), room: '666' },
  { id: '609', title: 'Kill Your Pop Stars Karaoke Band', start: parseAustralianTime('13:30'), end: parseAustralianTime('13:50'), room: '666' },
  { id: '610', title: 'Oozing Future Freaks Now', start: parseAustralianTime('12:00'), end: parseAustralianTime('13:30'), room: '666' },
];