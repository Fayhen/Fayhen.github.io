import { ProjectCardData } from 'components/models';
import { stacks } from 'assets/stacks';

export const frontendProjects: ProjectCardData[] = [
  {
    title: 'frontend.projectTitleEmojiShift',
    description: 'frontend.projectDescriptionEmojiShift',
    repositoryLink: 'https://github.com/Fayhen/emoji-shift',
    productionLink: 'https://fayhen.github.io/emoji-shift/',
    stacks: [
      stacks.typescript,
      stacks.html5,
      stacks.css3,
      stacks.vuejs
    ]
  },
  {
    title: 'frontend.projectTitleQuasarCropper',
    description: 'frontend.projectDescriptionQuasarCropper',
    repositoryLink: 'https://github.com/Fayhen/Quasar-Cropper',
    productionLink: 'https://5e93b3e6396d24fc3cf6807f--brave-jepsen-8fd015.netlify.app/',
    stacks: [
      stacks.html5,
      stacks.css3,
      stacks.vuejs,
      stacks.quasar
    ]
  },
  {
    title: 'frontend.projectTitleGroceryCart',
    description: 'frontend.projectDescriptionGroceryCart',
    repositoryLink: 'https://github.com/Fayhen/grocery-cart',
    productionLink: 'https://sleepy-shannon-c54eef.netlify.app/',
    stacks: [
      stacks.typescript,
      stacks.html5,
      stacks.css3,
      stacks.vuejs
    ]
  },
  {
    title: 'frontend.projectTitleParsingHell',
    description: 'frontend.projectDescriptionParsingHell',
    repositoryLink: null,
    productionLink: 'http://parsing-hell.surge.sh/',
    stacks: [
      stacks.html5,
      stacks.css3
    ]
  }
]
