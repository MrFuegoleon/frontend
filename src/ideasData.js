export const ideas = [
  { idea_id: 1, nom: 'Eco-Friendly Packaging', description: 'Develop biodegradable packaging for online shopping to reduce plastic waste.', date: '2024-10-01', feedback: [] },
  { idea_id: 2, nom: 'Community Garden', description: 'Create a community garden where local residents can grow vegetables and flowers.', date: '2024-10-02', feedback: [] },
  { idea_id: 3, nom: 'Online Learning Platform', description: 'An interactive platform for students to learn coding through games and challenges.', date: '2024-10-03', feedback: [] },
  { idea_id: 4, nom: 'Local Art Exhibitions', description: 'Organize monthly art exhibitions featuring local artists to promote culture and community engagement.', date: '2024-10-04', feedback: [] },
  { idea_id: 5, nom: 'Fitness App', description: 'Develop a fitness app that tailors workouts based on user preferences and health goals.', date: '2024-10-05', feedback: [] },
];

export const votesData = {
  1: { num_yes: 12, num_no: 3, feedback: [] },
  2: { num_yes: 5, num_no: 2, feedback: [] },
  3: { num_yes: 8, num_no: 4, feedback: [] },
  4: { num_yes: 15, num_no: 5, feedback: [] },
  5: { num_yes: 7, num_no: 1, feedback: [] },
};

export const drafts = [
  { draft_id: 1, nom: 'Sustainable Energy Project', description: 'Research and develop alternative energy solutions for local communities.'},
  { draft_id: 2, nom: 'Urban Green Spaces', description: 'Plan for more parks and green spaces in urban areas to promote sustainability and well-being.'}
];

export const handleShowFeedback = (ideaId) => {
  console.log(`Show feedback for idea ${ideaId}`);
};

export const handleGiveFeedback = (ideaId) => {
  console.log(`Give feedback for idea ${ideaId}`);
};
