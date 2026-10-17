export type Project = {
  slug: string; name: string; line: string; category: string; image: string;
  color: string; description: string; idea: string; approach: string; gallery: string[];
};

export const projects: Project[] = [
  { slug: 'adore', name: 'Adore', line: 'A different point of view', category: 'Brand identity', image: 'cosmos_1587598557.webp', color: '#bec6d9',
    description: 'A visual exploration of a creative studio with something to say. An expressive identity and an editorial digital experience put the work first, making space for the details that give a practice its personality.',
    idea: 'A frame for individuality', approach: 'The identity moves between generous open space and tightly cropped imagery. A restrained palette lets the photography lead, while confident typography gives the studio a consistent voice across every screen.', gallery: ['cosmos_1587598557.webp', 'cosmos_451390445.webp'] },
  { slug: 'openbrief', name: 'OpenBrief', line: 'Good ideas travel further', category: 'Art direction', image: 'cosmos_2096624173.webp', color: '#bdd5c3',
    description: 'An editorial study in making creative knowledge feel open and inviting. Type, texture, and a soft green palette turn a familiar learning format into something with an independent spirit.',
    idea: 'Room for a new thought', approach: 'An expressive typographic system balances character with clarity. Curved details bring movement to still layouts, while a simple hierarchy makes the message easy to follow.', gallery: ['cosmos_2096624173.webp', 'cosmos_68309060.webp'] },
  { slug: 'aperture', name: 'Aperture', line: 'Clarity in every interaction', category: 'Digital experience', image: 'cosmos_236691563.webp', color: '#d9ddda',
    description: 'A digital product exploration built around a simple question: how can a complicated service feel effortless? A modular interface and a clear visual language bring the essentials into focus.',
    idea: 'Less friction. More possibility.', approach: 'We explored a compact set of components that can grow with the product. Careful spacing, direct language, and meaningful contrast help people find their next step.', gallery: ['cosmos_236691563.webp', 'cosmos_955335102.webp'] },
  { slug: 'est-populo', name: 'Est Populo', line: 'Made to move people', category: 'Brand identity', image: 'cosmos_451390445.webp', color: '#d6d4c9',
    description: 'A study in creative confidence. An outspoken identity brings strategy, culture, and personality together in an adaptable system for a contemporary agency.',
    idea: 'A voice with a pulse', approach: 'Big typography and unexpected image pairings set the rhythm. A disciplined grid gives that energy a structure, allowing the identity to feel expressive without losing its clarity.', gallery: ['cosmos_451390445.webp', 'cosmos_1587598557.webp'] },
  { slug: 'reframe', name: 'Reframe', line: 'Every story starts somewhere', category: 'Art direction', image: 'cosmos_68309060.webp', color: '#e9e4d6',
    description: 'A campaign exploration about the simplest tool in advertising: a story worth sharing. Tactile surfaces and characterful lettering create an approachable, distinctly human voice.',
    idea: 'Start with a story', approach: 'The direction pairs energetic typography with the warmth of printed matter. Each composition keeps the central thought clear, with small gestures that reward a closer look.', gallery: ['cosmos_68309060.webp', 'cosmos_2096624173.webp'] },
  { slug: 'monogram', name: 'Monogram', line: 'An idea you can step inside', category: 'Spatial experience', image: 'cosmos_84034136.webp', color: '#b4a77d',
    description: 'A spatial identity study where a brand becomes a place. Light, material, and a strong graphic gesture work together to make a physical environment feel unmistakable.',
    idea: 'Identity, in another dimension', approach: 'A warm material palette meets precise architectural lines. The visual language moves from signage to screen, creating a connected experience across the space.', gallery: ['cosmos_84034136.webp', 'cosmos_863975168.webp'] },
  { slug: 'common-ground', name: 'Common Ground', line: 'Space for a shared ambition', category: 'Spatial experience', image: 'cosmos_863975168.webp', color: '#c5b597',
    description: 'An exploration of the spaces where ideas happen. A welcoming work environment brings together natural materials, collaborative settings, and a playful visual identity.',
    idea: 'Make room for people', approach: 'The space puts everyday interaction at the centre. A considered mix of texture, illustration, and colour gives people a place to think, make, and connect.', gallery: ['cosmos_863975168.webp', 'cosmos_84034136.webp'] },
  { slug: 'new-mode', name: 'New Mode', line: 'Change, made tangible', category: 'Digital experience', image: 'cosmos_955335102.webp', color: '#d39765',
    description: 'A digital identity exploration for a world in motion. A flexible graphic system and a confident web experience make a complex offer feel clear and engaging.',
    idea: 'A new way forward', approach: 'Simple geometric forms become a versatile language for change. Across the interface, purposeful movement and strong hierarchy keep the experience focused on the work.', gallery: ['cosmos_955335102.webp', 'cosmos_236691563.webp'] },
];

export const media = (filename: string) => `/media/${filename}`;
