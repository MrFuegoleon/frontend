// api/projects.js
const API_BASE_URL = "https://tkwbackendcdl.onrender.com";

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/home/home`, {
      method: "GET",
      credentials: "include", // Include cookies (for session-based auth)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const addNewProject = async (projectData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/newProject/newProject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error("Failed to add new project");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding new project:", error);
    throw error;
  }
};
