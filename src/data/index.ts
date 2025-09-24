import { markdownContent } from './content';

export interface DocSection {
  id: string;
  title: string;
  shortTitle?: string;
  filename: string;
  image?: string;
}

export const docSections: DocSection[] = [
  {
    id: 'song-view',
    title: 'Song View',
    shortTitle: 'Song',
    filename: '01_Song-View.md',
    image: '01_song-view.png',
  },
  {
    id: 'chain-view',
    title: 'Chain View',
    shortTitle: 'Chain',
    filename: '02_Chain-View.md',
    image: '02_chain-view.png',
  },
  {
    id: 'phrase-view',
    title: 'Phrase View',
    shortTitle: 'Phrase',
    filename: '03_Phrase-View.md',
    image: '03_phrase-view.png',
  },
  {
    id: 'instrument-view',
    title: 'Instrument View',
    shortTitle: 'Instrument',
    filename: '04_Instrument-View.md',
    image: '04_instrum-view.png',
  },
  {
    id: 'instrument-modulation-view',
    title: 'Instrument Modulation View',
    shortTitle: 'Modulation',
    filename: '05_Instrument-Modulation-View.md',
    image: '05_instrum-mod-view.png',
  },
  {
    id: 'instrument-pool-view',
    title: 'Instrument Pool View',
    shortTitle: 'Pool',
    filename: '06_Instrument-Pool-View.md',
    image: '06_instrum-pool-view.png',
  },
  {
    id: 'table-view',
    title: 'Table View',
    shortTitle: 'Table',
    filename: '07_Table-View.md',
    image: '07_table-view.png',
  },
  {
    id: 'groove-view',
    title: 'Groove View',
    shortTitle: 'Groove',
    filename: '08_Groove-View.md',
    image: '08_groove-view.png',
  },
  {
    id: 'scale-view',
    title: 'Scale View',
    shortTitle: 'Scale',
    filename: '09_Scale-View.md',
    image: '09_scale-view.png',
  },
  {
    id: 'eq-editor-view',
    title: 'EQ Editor View',
    shortTitle: 'EQ Editor',
    filename: '11_EQ-Editor-View.md',
    image: '11_eq-view.png',
  },
  {
    id: 'mixer-view',
    title: 'Mixer View',
    shortTitle: 'Mixer',
    filename: '10_Mixer-View.md',
    image: '10_mixer-view.png',
  },
  {
    id: 'limiter-mix-scope-view',
    title: 'Limiter Mix Scope View',
    shortTitle: 'Limiter',
    filename: '12_Limiter-Mix-Scope-View.md',
    image: '12_scope-view.png',
  },
  {
    id: 'effect-settings-view',
    title: 'Effect Settings View',
    shortTitle: 'Effects',
    filename: '13_Effect-Settings-View.md',
    image: '13_efx-view.png',
  },
  {
    id: 'project-view',
    title: 'Project View',
    shortTitle: 'Project',
    filename: '14_Project-View.md',
    image: '14_project-view.png',
  },
];

export function getDocContent(filename: string): string {
  return markdownContent[filename] || '# Error\n\nDocumentation not found.';
}