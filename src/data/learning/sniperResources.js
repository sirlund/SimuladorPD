/**
 * Sniper Resources - Recursos francotirador por bias
 * Máximo 3 recursos ultra-específicos, no bibliotecas genéricas
 * Cada recurso tiene un "why" que explica por qué ESE recurso para ESE problema
 */

export const sniperResources = {
  'conflict-avoidant': [
    {
      id: 'cagan-saying-no',
      type: 'article',
      emoji: '📖',
      title: 'The Art of Saying No',
      author: 'Marty Cagan',
      source: 'SVPG',
      section: 'Sección: "Product Strategy vs Sales Demands"',
      url: 'https://www.svpg.com/the-art-of-saying-no/',
      readTime: '10 min',
      why: 'Aprenderás a rechazar solicitudes sin destruir relaciones. El framework "Yes to the problem, No to the solution".',
      keyTakeaway: 'Di "sí" al problema que quieren resolver, "no" a la solución específica que proponen.'
    },
    {
      id: 'radical-candor-ruinous',
      type: 'book',
      emoji: '📚',
      title: 'Radical Candor',
      author: 'Kim Scott',
      section: 'Capítulo sobre "Ruinous Empathy"',
      url: 'https://www.radicalcandor.com/the-book/',
      readTime: '30 min (capítulo)',
      why: 'Estás cayendo en "empatía ruinosa" - ser tan amable que no dices la verdad. Este capítulo diagnostica exactamente tu patrón.',
      keyTakeaway: 'Cuidar personalmente + Desafiar directamente = Candor Radical. Te falta el segundo.'
    },
    {
      id: 'biddle-stakeholders',
      type: 'video',
      emoji: '🎥',
      title: 'Stakeholder Management ≠ Making People Happy',
      author: 'Gibson Biddle (ex-Netflix)',
      source: 'YouTube',
      url: 'https://www.youtube.com/watch?v=LkXQdW8a0KU',
      readTime: '25 min',
      why: 'Gibson explica cómo Netflix decía "no" a ejecutivos constantemente mientras construía una cultura de innovación.',
      keyTakeaway: 'Tu trabajo es entregar resultados, no hacer felices a los stakeholders.'
    }
  ],

  'perfectionist': [
    {
      id: 'shape-up-appetite',
      type: 'book',
      emoji: '📚',
      title: 'Shape Up',
      author: 'Ryan Singer (Basecamp)',
      section: 'Capítulo 2: "Fixed Time, Variable Scope"',
      url: 'https://basecamp.com/shapeup/1.2-chapter-03',
      readTime: '20 min',
      free: true,
      why: 'El antídoto a tu perfeccionismo: define el TIEMPO primero, luego ajusta el scope. No al revés.',
      keyTakeaway: 'El appetite (cuánto tiempo vale invertir) se define ANTES de diseñar la solución.'
    },
    {
      id: 'spotify-good-enough',
      type: 'article',
      emoji: '📖',
      title: 'Good Enough is Good Enough',
      author: 'Spotify Engineering',
      source: 'Spotify Labs',
      url: 'https://engineering.atspotify.com/2014/03/27/spotify-engineering-culture-part-1/',
      readTime: '15 min',
      why: 'Spotify escala con "suficientemente bueno". Este artículo explica cómo priorizan velocidad sobre perfección.',
      keyTakeaway: 'El 80% shipped hoy vale más que el 100% shipped en 3 meses.'
    },
    {
      id: 'ries-mvp',
      type: 'video',
      emoji: '🎥',
      title: 'The Minimum Viable Product',
      author: 'Eric Ries',
      source: 'Lean Startup',
      url: 'https://www.youtube.com/watch?v=1FoCbbbcYT8',
      readTime: '20 min',
      why: 'El concepto de MVP existe porque la perfección es el enemigo del aprendizaje. Eric explica el "por qué" original.',
      keyTakeaway: 'El MVP no es el producto más pequeño. Es el experimento más pequeño que valida tu hipótesis.'
    }
  ],

  'people-pleaser': [
    {
      id: 'horowitz-hard-things',
      type: 'book',
      emoji: '📚',
      title: 'The Hard Thing About Hard Things',
      author: 'Ben Horowitz',
      section: 'Capítulo: "The Struggle"',
      url: 'https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205',
      readTime: '40 min (capítulo)',
      why: 'Ben Horowitz no busca consenso. Este capítulo muestra cómo tomar decisiones duras cuando todos quieren cosas diferentes.',
      keyTakeaway: 'No hay respuestas fáciles. Tu trabajo es elegir entre opciones malas y menos malas.'
    },
    {
      id: 'bezos-disagree-commit',
      type: 'article',
      emoji: '📖',
      title: 'Disagree and Commit',
      author: 'Jeff Bezos',
      source: 'Amazon Leadership Principles',
      url: 'https://www.amazon.jobs/en/principles',
      readTime: '5 min',
      why: 'El principio de Amazon que permite velocidad sin consenso. Expresa tu desacuerdo, luego ejecuta con compromiso total.',
      keyTakeaway: '"Have backbone; disagree and commit." Tener una postura es un requisito, no una opción.'
    },
    {
      id: 'grove-decisions',
      type: 'book',
      emoji: '📚',
      title: 'High Output Management',
      author: 'Andy Grove (Intel)',
      section: 'Capítulo sobre Decision Making',
      url: 'https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884',
      readTime: '30 min (capítulo)',
      why: 'Andy Grove explica por qué esperar consenso es la forma más lenta y cara de tomar decisiones.',
      keyTakeaway: 'El consenso es un lujo. La mayoría de decisiones deben tomarse con información incompleta.'
    }
  ],

  'over-engineer': [
    {
      id: 'fowler-yagni',
      type: 'article',
      emoji: '📖',
      title: 'YAGNI - You Aren\'t Gonna Need It',
      author: 'Martin Fowler',
      source: 'martinfowler.com',
      url: 'https://martinfowler.com/bliki/Yagni.html',
      readTime: '10 min',
      why: 'Martin Fowler explica por qué construir "para el futuro" casi siempre es desperdicio.',
      keyTakeaway: 'El costo de construir algo que no necesitas es mayor que el costo de agregarlo después.'
    },
    {
      id: 'simple-made-easy',
      type: 'video',
      emoji: '🎥',
      title: 'Simple Made Easy',
      author: 'Rich Hickey',
      source: 'Strange Loop Conference',
      url: 'https://www.youtube.com/watch?v=SxdOUGdseq4',
      readTime: '60 min',
      why: 'La charla definitiva sobre simplicidad vs complejidad. Rich Hickey (creador de Clojure) destruye el mito de que "complejo = sofisticado".',
      keyTakeaway: 'Simple ≠ Fácil. La simplicidad es un logro, no un punto de partida.'
    },
    {
      id: 'gall-systemantics',
      type: 'book',
      emoji: '📚',
      title: 'Systemantics (Gall\'s Law)',
      author: 'John Gall',
      section: 'Ley de Gall',
      url: 'https://en.wikipedia.org/wiki/John_Gall_(author)#Gall\'s_law',
      readTime: '5 min (concepto)',
      why: '"Un sistema complejo que funciona siempre evoluciona de un sistema simple que funcionaba." No puedes diseñar complejidad desde cero.',
      keyTakeaway: 'Empieza simple. La complejidad debe emerger de necesidades reales, no de anticipación.'
    }
  ],

  'risk-averse': [
    {
      id: 'taleb-antifragile',
      type: 'book',
      emoji: '📚',
      title: 'Antifragile',
      author: 'Nassim Taleb',
      section: 'Capítulos 1-3 (concepto core)',
      url: 'https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680',
      readTime: '60 min (primeros capítulos)',
      why: 'Taleb explica por qué proteger de todo el estrés crea fragilidad. Los sistemas fuertes se construyen con exposición controlada.',
      keyTakeaway: 'Antifragile > Robusto > Frágil. Los equipos que nunca sufren presión se rompen ante el primer impacto real.'
    },
    {
      id: 'edmondson-safety',
      type: 'article',
      emoji: '📖',
      title: 'Psychological Safety ≠ Comfort',
      author: 'Amy Edmondson',
      source: 'Harvard Business Review',
      url: 'https://hbr.org/2023/02/what-is-psychological-safety',
      readTime: '15 min',
      why: 'Amy Edmondson (quien acuñó el término) explica que Psychological Safety NO significa evitar conflicto o incomodidad.',
      keyTakeaway: 'Safety = Seguridad para tomar riesgos. No seguridad DE los riesgos.'
    },
    {
      id: 'catmull-creativity',
      type: 'book',
      emoji: '📚',
      title: 'Creativity, Inc.',
      author: 'Ed Catmull (Pixar)',
      section: 'Capítulo sobre "Fear and Failure"',
      url: 'https://www.amazon.com/Creativity-Inc-Overcoming-Unseen-Inspiration/dp/0812993012',
      readTime: '30 min (capítulo)',
      why: 'Pixar produce excelencia PORQUE abraza el fracaso controlado. Ed explica cómo proteger creatividad sin proteger de la realidad.',
      keyTakeaway: 'El miedo al fracaso mata más innovación que el fracaso mismo.'
    }
  ],

  'short-term': [
    {
      id: 'mckeown-essentialism',
      type: 'book',
      emoji: '📚',
      title: 'Essentialism',
      author: 'Greg McKeown',
      section: 'Parte 2: "Eliminate"',
      url: 'https://www.amazon.com/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0804137382',
      readTime: '45 min (sección)',
      why: 'Greg McKeown destruye el mito de "hacer más". El libro es sobre hacer MENOS pero mejor.',
      keyTakeaway: 'Si no priorizas tu vida, alguien más lo hará por ti.'
    },
    {
      id: 'newport-deep-work',
      type: 'book',
      emoji: '📚',
      title: 'Deep Work',
      author: 'Cal Newport',
      section: 'Regla #1: Work Deeply',
      url: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692',
      readTime: '30 min (capítulo)',
      why: 'Cal Newport explica por qué el trabajo superficial (emails, Slack, reuniones) se come todo tu tiempo si no lo proteges activamente.',
      keyTakeaway: 'El trabajo profundo es la habilidad más valiosa del siglo XXI. Y la más rara.'
    },
    {
      id: 'eisenhower-matrix',
      type: 'article',
      emoji: '📖',
      title: 'The Eisenhower Matrix',
      author: 'James Clear',
      source: 'jamesclear.com',
      url: 'https://jamesclear.com/eisenhower-box',
      readTime: '10 min',
      why: 'El framework más simple para distinguir urgente de importante. Eisenhower lo usaba para dirigir un país.',
      keyTakeaway: 'Lo urgente rara vez es importante. Lo importante rara vez es urgente.'
    }
  ],

  'revenue-driven': [
    {
      id: 'cagan-mercenaries',
      type: 'article',
      emoji: '📖',
      title: 'Missionaries vs Mercenaries',
      author: 'Marty Cagan',
      source: 'SVPG',
      url: 'https://www.svpg.com/missionaries-vs-mercenaries/',
      readTime: '10 min',
      why: 'Cagan explica la diferencia entre equipos que construyen producto (misioneros) y equipos que ejecutan features (mercenarios).',
      keyTakeaway: 'Los mercenarios construyen lo que les piden. Los misioneros resuelven problemas reales.'
    },
    {
      id: 'reforge-retention',
      type: 'article',
      emoji: '📖',
      title: 'Retention is King',
      author: 'Brian Balfour',
      source: 'Reforge',
      url: 'https://www.reforge.com/blog/retention-engagement-growth-silent-killer',
      readTime: '15 min',
      why: 'Brian Balfour (ex-HubSpot) explica por qué optimizar para retención > optimizar para adquisición. El revenue sostenible viene de usuarios que se quedan.',
      keyTakeaway: 'Retention es el multiplicador de todo lo demás. Sin retención, el crecimiento es una ilusión.'
    },
    {
      id: 'intercom-saying-no',
      type: 'article',
      emoji: '📖',
      title: 'Product Strategy Means Saying No',
      author: 'Des Traynor',
      source: 'Intercom',
      url: 'https://www.intercom.com/blog/product-strategy-means-saying-no/',
      readTime: '10 min',
      why: 'Intercom rechaza features constantemente. Des explica el framework para decidir qué construir y qué rechazar.',
      keyTakeaway: 'Cada feature que agregas diluye las demás. Decir "no" es proteger el producto.'
    }
  ],

  'tech-fomo': [
    {
      id: 'gartner-hype',
      type: 'article',
      emoji: '📖',
      title: 'Gartner Hype Cycle',
      author: 'Gartner',
      source: 'Gartner Research',
      url: 'https://www.gartner.com/en/research/methodologies/gartner-hype-cycle',
      readTime: '15 min',
      why: 'El framework que predice el ciclo de vida del hype tecnológico. Aprende a identificar en qué fase está cada tecnología.',
      keyTakeaway: 'Toda tecnología pasa por: Trigger → Peak of Inflated Expectations → Trough of Disillusionment → Plateau.'
    },
    {
      id: 'spolsky-fire-and-motion',
      type: 'article',
      emoji: '📖',
      title: 'Fire and Motion',
      author: 'Joel Spolsky',
      source: 'Joel on Software',
      url: 'https://www.joelonsoftware.com/2002/01/06/fire-and-motion/',
      readTime: '10 min',
      why: 'Joel explica cómo las grandes empresas usan el hype para distraer a competidores. No caigas en su juego.',
      keyTakeaway: 'Microsoft no lanza tecnologías para que las uses. Las lanza para que pierdas tiempo evaluándolas.'
    },
    {
      id: 'moore-crossing-chasm',
      type: 'book',
      emoji: '📚',
      title: 'Crossing the Chasm',
      author: 'Geoffrey Moore',
      section: 'Capítulo sobre Technology Adoption',
      url: 'https://www.amazon.com/Crossing-Chasm-Marketing-High-Tech-Mainstream/dp/0062292986',
      readTime: '30 min (capítulo)',
      why: 'Geoffrey Moore explica por qué la mayoría de las tecnologías "prometedoras" nunca cruzan al mainstream.',
      keyTakeaway: 'Early adopters ≠ Early majority. Lo que funciona para innovators no funciona para el resto.'
    }
  ]
};

// Alias para los nuevos IDs del sistema de arquetipos
const resourceAliases = {
  'order-taker': 'conflict-avoidant',
  'craft-obsessive': 'perfectionist',
  'process-bureaucrat': 'risk-averse',
  'lone-wolf': 'short-term'
};

export const getResourcesByBias = (biasId) => {
  const aliasedId = resourceAliases[biasId] || biasId;
  return sniperResources[aliasedId] || sniperResources['conflict-avoidant'];
};
export const getAllSniperResources = () => Object.values(sniperResources).flat();
