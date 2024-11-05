const API_BASE_URL = 'https://deploiement-backend-ifrc2hafp-emanbichs-projects.vercel.app/';

export const checkAuthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/login/login`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error checking auth status:', error);
    throw error;
  }
};

// New function to fetch all draft ideas
export const fetchIdeaDrafts = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/drafts/drafts?userId=${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching drafts:', error);
    throw error;
  }
};

// New function to fetch user organizations
export const fetchUserOrganizations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/organizations/organizations`, {  // Corrected the URL here
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }); 

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching user organizations:', error);
    throw error;
  }
};


export const saveIdeaDraft = async (ideaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/drafts/drafts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(ideaData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving draft:', error);
    throw error;
  }
};

export const deleteIdeaDraft = async (ideaId) => {
  const url = `${API_BASE_URL}/drafts/delete/${ideaId}`;
  console.log(`Attempting to delete draft with URL: ${url}`);

  const response = await fetch(url, {
      method: 'POST',  // Changed to POST to match the backend
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
  });

  console.log(`Response status: ${response.status}`);
  
  if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to delete draft. Status: ${response.status}, Message: ${errorText}`);
      throw new Error('Failed to delete previous draft');
  }

  return response.json();
};


export const submitIdea = async (ideaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/ideas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(ideaData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sharing idea:', error);
    throw error;
  }
};
