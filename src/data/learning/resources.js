/**
 * Curated Resources Database
 * Recursos externos de alta calidad para cada tema
 */

export const resources = {
  // === BOOKS ===
  'inspired-cagan': {
    id: 'inspired-cagan',
    type: 'book',
    title: 'Inspired: How to Create Tech Products Customers Love',
    author: 'Marty Cagan',
    url: 'https://www.svpg.com/inspired-how-to-create-products-customers-love/',
    year: 2018,
    readTime: '8 hours',
    topics: ['product-strategy', 'team-leadership', 'stakeholder-management'],
    keyTakeaway: 'Product teams empoderados vs feature teams. Discovery continuo.',
    chapters: {
      'enterprise': 'Part V: The Right Culture - Working with Enterprise',
      'stakeholders': 'Chapter 35: Managing Stakeholders',
      'vision': 'Chapter 22: Product Vision'
    }
  },

  'continuous-discovery': {
    id: 'continuous-discovery',
    type: 'book',
    title: 'Continuous Discovery Habits',
    author: 'Teresa Torres',
    url: 'https://www.producttalk.org/continuous-discovery-habits/',
    year: 2021,
    readTime: '6 hours',
    topics: ['research-methods', 'product-strategy'],
    keyTakeaway: 'Weekly touchpoints with customers. Opportunity Solution Trees.',
    chapters: {
      'interviews': 'Chapter 5: Continuous Interviewing',
      'assumptions': 'Chapter 7: Assumption Testing'
    }
  },

  'radical-candor': {
    id: 'radical-candor',
    type: 'book',
    title: 'Radical Candor: Be a Kick-Ass Boss',
    author: 'Kim Scott',
    url: 'https://www.radicalcandor.com/the-book/',
    year: 2017,
    readTime: '7 hours',
    topics: ['team-leadership', 'stakeholder-management'],
    keyTakeaway: 'Care personally + Challenge directly = Radical Candor',
    chapters: {
      'feedback': 'Chapter 2: Get, Give, and Encourage Guidance',
      'difficult': 'Chapter 6: Guidance - Telling People What You Think'
    }
  },

  'shape-up': {
    id: 'shape-up',
    type: 'book',
    title: 'Shape Up: Stop Running in Circles',
    author: 'Ryan Singer (Basecamp)',
    url: 'https://basecamp.com/shapeup',
    year: 2019,
    readTime: '4 hours',
    free: true,
    topics: ['product-strategy', 'crisis-management'],
    keyTakeaway: 'Appetite-driven development. Fixed time, variable scope.',
    chapters: {
      'appetite': 'Chapter 2: Principles of Shaping',
      'scope': 'Chapter 10: Scope Hammering'
    }
  },

  'lean-ux': {
    id: 'lean-ux',
    type: 'book',
    title: 'Lean UX: Applying Lean Principles to UX Design',
    author: 'Jeff Gothelf & Josh Seiden',
    url: 'https://www.leanuxbook.com/',
    year: 2021,
    readTime: '5 hours',
    topics: ['research-methods', 'product-strategy'],
    keyTakeaway: 'Outcomes over outputs. Collaborative design. MVPs.',
  },

  'refactoring': {
    id: 'refactoring',
    type: 'book',
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    url: 'https://martinfowler.com/books/refactoring.html',
    year: 2018,
    readTime: '10 hours',
    topics: ['design-systems', 'innovation-tech'],
    keyTakeaway: 'Strangler fig pattern. Incremental improvement over rewrites.',
  },

  'dont-make-me-think': {
    id: 'dont-make-me-think',
    type: 'book',
    title: "Don't Make Me Think",
    author: 'Steve Krug',
    url: 'https://sensible.com/dont-make-me-think/',
    year: 2014,
    readTime: '3 hours',
    topics: ['research-methods', 'mobile-platform'],
    keyTakeaway: 'Usability testing con 5 usuarios. Simplicidad radical.',
  },

  // === ARTICLES ===
  'svpg-product-market-fit': {
    id: 'svpg-product-market-fit',
    type: 'article',
    title: 'Product Market Fit',
    author: 'Marty Cagan',
    source: 'Silicon Valley Product Group',
    url: 'https://www.svpg.com/product-market-fit/',
    readTime: '10 min',
    free: true,
    topics: ['product-strategy', 'metrics-analytics'],
    keyTakeaway: 'PMF no es un momento, es un proceso continuo.'
  },

  'svpg-saying-no': {
    id: 'svpg-saying-no',
    type: 'article',
    title: 'The Art of Saying No',
    author: 'Marty Cagan',
    source: 'Silicon Valley Product Group',
    url: 'https://www.svpg.com/the-art-of-saying-no/',
    readTime: '8 min',
    free: true,
    topics: ['stakeholder-management', 'product-strategy'],
    keyTakeaway: 'Di "sí" al problema, "no" a la solución propuesta.'
  },

  'hbr-manage-up': {
    id: 'hbr-manage-up',
    type: 'article',
    title: 'Managing Your Boss',
    author: 'John Gabarro & John Kotter',
    source: 'Harvard Business Review',
    url: 'https://hbr.org/2005/01/managing-your-boss',
    readTime: '15 min',
    topics: ['stakeholder-management'],
    keyTakeaway: 'Entiende las presiones de tu jefe. Adapta tu comunicación.'
  },

  'intercom-jobs-to-be-done': {
    id: 'intercom-jobs-to-be-done',
    type: 'article',
    title: 'Intercom on Jobs-to-be-Done',
    author: 'Intercom',
    source: 'Intercom',
    url: 'https://www.intercom.com/resources/books/intercom-jobs-to-be-done',
    readTime: '45 min',
    free: true,
    topics: ['research-methods', 'product-strategy'],
    keyTakeaway: 'Los usuarios "contratan" productos para hacer un trabajo.'
  },

  'spotify-design-systems': {
    id: 'spotify-design-systems',
    type: 'article',
    title: 'Building a Visual Language',
    author: 'Spotify Design',
    source: 'Spotify Design',
    url: 'https://spotify.design/article/building-a-visual-language',
    readTime: '12 min',
    free: true,
    topics: ['design-systems'],
    keyTakeaway: 'Design systems como producto interno con usuarios internos.'
  },

  'amplitude-north-star': {
    id: 'amplitude-north-star',
    type: 'article',
    title: 'North Star Playbook',
    author: 'Amplitude',
    source: 'Amplitude',
    url: 'https://amplitude.com/north-star',
    readTime: '30 min',
    free: true,
    topics: ['metrics-analytics', 'product-strategy'],
    keyTakeaway: 'Una métrica que captura el valor entregado al cliente.'
  },

  'reforge-retention': {
    id: 'reforge-retention',
    type: 'article',
    title: 'Retention is King',
    author: 'Brian Balfour',
    source: 'Reforge',
    url: 'https://www.reforge.com/blog/retention-engagement-growth-silent-killer',
    readTime: '15 min',
    free: true,
    topics: ['metrics-analytics', 'product-strategy'],
    keyTakeaway: 'Retention es el multiplicador de todo lo demás.'
  },

  'nngroup-usability-testing': {
    id: 'nngroup-usability-testing',
    type: 'article',
    title: 'Why You Only Need to Test with 5 Users',
    author: 'Jakob Nielsen',
    source: 'Nielsen Norman Group',
    url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/',
    readTime: '8 min',
    free: true,
    topics: ['research-methods'],
    keyTakeaway: '5 usuarios encuentran 85% de problemas de usabilidad.'
  },

  'wcag-quick-ref': {
    id: 'wcag-quick-ref',
    type: 'article',
    title: 'WCAG 2.1 Quick Reference',
    author: 'W3C',
    source: 'W3C',
    url: 'https://www.w3.org/WAI/WCAG21/quickref/',
    readTime: '30 min',
    free: true,
    topics: ['ethics-compliance', 'mobile-platform'],
    keyTakeaway: 'Referencia filtrable de criterios de accesibilidad.'
  },

  'dark-patterns': {
    id: 'dark-patterns',
    type: 'article',
    title: 'Dark Patterns Hall of Shame',
    author: 'Harry Brignull',
    source: 'Deceptive Design',
    url: 'https://www.deceptive.design/',
    readTime: '20 min',
    free: true,
    topics: ['ethics-compliance'],
    keyTakeaway: 'Catálogo de patrones manipulativos a evitar.'
  },

  // === VIDEOS ===
  'talk-empowered-teams': {
    id: 'talk-empowered-teams',
    type: 'video',
    title: 'Empowered Product Teams',
    author: 'Marty Cagan',
    source: 'Mind the Product',
    url: 'https://www.youtube.com/watch?v=UFVwB7gX1LE',
    duration: '45 min',
    free: true,
    topics: ['team-leadership', 'product-strategy'],
    keyTakeaway: 'Feature teams vs Empowered teams.'
  },

  'talk-measuring-design': {
    id: 'talk-measuring-design',
    type: 'video',
    title: 'How to Measure the Impact of Design',
    author: 'Jared Spool',
    source: 'UX Immersion',
    url: 'https://www.youtube.com/watch?v=s8WsyA5igYg',
    duration: '50 min',
    free: true,
    topics: ['metrics-analytics', 'research-methods'],
    keyTakeaway: 'El ROI del diseño es reducir fricción del negocio.'
  },

  // === TOOLS & FRAMEWORKS ===
  'miro-stakeholder-map': {
    id: 'miro-stakeholder-map',
    type: 'tool',
    title: 'Stakeholder Mapping Template',
    source: 'Miro',
    url: 'https://miro.com/templates/stakeholder-map/',
    free: true,
    topics: ['stakeholder-management'],
    keyTakeaway: 'Template para mapear poder e interés de stakeholders.'
  },

  'figma-design-tokens': {
    id: 'figma-design-tokens',
    type: 'tool',
    title: 'Design Tokens in Figma',
    source: 'Figma',
    url: 'https://www.figma.com/best-practices/design-systems/tokens/',
    free: true,
    topics: ['design-systems'],
    keyTakeaway: 'Guía oficial de tokens en Figma.'
  }
};

export const getResourceById = (id) => resources[id] || null;

export const getResourcesByTopic = (topicId) => {
  return Object.values(resources).filter(r =>
    r.topics?.includes(topicId)
  );
};

export const getResourcesByType = (type) => {
  return Object.values(resources).filter(r => r.type === type);
};

export const getFreeResources = () => {
  return Object.values(resources).filter(r => r.free);
};
