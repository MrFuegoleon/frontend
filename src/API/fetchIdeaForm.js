const API_BASE_URL = "https://tkwbackendcdl.onrender.com";

// Fonction pour récupérer le token depuis localStorage
const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Fonction pour vérifier le statut d'authentification de l'utilisateur
export const checkAuthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/login/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`, // En-tête Authorization avec le token
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error checking auth status:", error);
    throw error;
  }
};

// Fonction pour récupérer les brouillons d'idées de l'utilisateur
export const fetchIdeaDrafts = async (userId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/drafts/drafts?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching drafts:", error);
    throw error;
  }
};

// Fonction pour récupérer les organisations de l'utilisateur
export const fetchUserOrganizations = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/organizations/organizations`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user organizations:", error);
    throw error;
  }
};

// Fonction pour sauvegarder un brouillon d'idée
export const saveIdeaDraft = async (ideaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/drafts/drafts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(ideaData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error saving draft:", error);
    throw error;
  }
};

// Fonction pour supprimer un brouillon d'idée
export const deleteIdeaDraft = async (ideaId) => {
  const url = `${API_BASE_URL}/drafts/delete/${ideaId}`;
  console.log(`Attempting to delete draft with URL: ${url}`);

  const response = await fetch(url, {
    method: "POST", // Changed to POST to match the backend
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Failed to delete draft. Status: ${response.status}, Message: ${errorText}`
    );
    throw new Error("Failed to delete previous draft");
  }

  return response.json();
};

// Fonction pour soumettre une nouvelle idée
export const submitIdea = async (ideaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(ideaData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sharing idea:", error);
    throw error;
  }
};
