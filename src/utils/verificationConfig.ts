// SPDX-License-Identifier: GPL-3.0-or-later
/*
    Animal Rights Advocates Discord Bot
    Copyright (C) 2022  Anthony Berg

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// The maximum amount of verification VCs there can be
export const maxVCs = 10;

// The maximum amount of leaving bans before time resets
export const leaveBan = 8;

export const questionInfo = [
  {
    question: 'Welcome to Animal Rights Advocates! How did you find the server?',
    buttons: [
      'Search',
      'Friend',
      'YouTube',
      'Another Server',
      'Vegan Org',
    ],
  },
  {
    question: 'How long have you been vegan?',
    buttons: [
      '<1 month',
      '1-2 months',
      '3-6 months',
      '6 months - 1 year',
      '1-2 years',
      '2+ years',
    ],
  },
  {
    question: 'Ask the user why they went vegan and to define veganism.\n'
      + 'Do they cite ethical concerns and abstinence from at least meat, dairy, eggs, leather, and fur?',
    buttons: [
      'Yes',
      'Yes with prompting',
      'No',
    ],
  },
  {
    question: 'Ask the user about their life as a vegan, including things like watching documentaries or social media content and interactions with family and friends. What are their stories like?',
    buttons: [
      'Believable',
      'Unbelievable',
      'Short',
    ],
  },
  {
    question: 'Ask the user about food and nutrition. Do they seem to know how to live as a vegan?',
    buttons: [
      'Dietitian / Chef',
      'Acceptable',
      'More or less',
      'Salads / Smoothies',
      'No clue',
    ],
  },
  {
    question: 'Do you think this user is definitely vegan? (This is for the trusted role)',
    buttons: [
      'Yes',
      'No',
    ],
  },
  {
    question: 'Offer to ask questions for Activist. Do you think they should get it?',
    buttons: [
      'Yes',
      'No',
    ],
  },
  {
    question: 'Do some activism, asking Activist questions. Now which role should they get?',
    buttons: [
      'Vegan',
      'Convinced',
      'Non-vegan',
    ],
  },
  {
    question: 'Should this user get Veg Curious?',
    buttons: [
      'Yes',
      'No',
    ],
  },
];

export const serverFind = [
  // From a friend
  {
    question: 'Ask for username and indicate',
    buttons: [
      'Vegan',
      'Non-Vegan',
      'Unknown',
    ],
  },
  // From a video
  {
    question: 'Ask what video',
    buttons: [
      'Troll video',
      'Our content',
      'Other',
    ],
  },
  // From another server
  {
    question: 'Ask which server',
    buttons: [
      'Vegan',
      'Debate',
      'Other',
    ],
  },
  // From a vegan organisation
  {
    question: 'Ask which one',
    buttons: [
      'Vegan Hacktivists',
      'Other',
    ],
  },
];
