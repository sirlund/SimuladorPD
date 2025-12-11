// Learning System Exports
export { topics, getTopicById, getAllTopics } from './topics';
export { archetypes, getArchetypeById, getAllArchetypes, detectArchetypes } from './archetypes';
export { resources, getResourceById, getResourcesByTopic, getResourcesByType, getFreeResources } from './resources';

// V2: Diagnosis System
export {
  diagnoses,
  detectDominantBias,
  getDiagnosisById,
  getAllDiagnoses,
  // New archetype system
  failureArchetypes,
  successArchetypes,
  failureArchetypeMap,
  successArchetypeMap,
  selectArchetype,
  selectFailureArchetype,
  selectSuccessArchetype
} from './diagnoses';
export { competencies, categoryToCompetency, calculateCompetencyMap, calculateLevel } from './vpFeedback';
export { mondayMissions, getMissionByBias, getAllMissions } from './mondayMissions';
export { sniperResources, getResourcesByBias, getAllSniperResources } from './sniperResources';
