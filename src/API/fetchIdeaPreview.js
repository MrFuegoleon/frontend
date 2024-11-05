const API_BASE_URL = "https://deploiement-backend-ifrc2hafp-emanbichs-projects.vercel.app/";

export const fetchUserId = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/login/login`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.status}`);
    }

    const user = await response.json();
    if (!user || !user.id || !user.type) {  // Ensure both id and type are present
      throw new Error('User information incomplete');
    }
    
    return { id: user.id, type: user.type }; // Return both id and type
  } catch (error) {
    console.error("Error fetching user ID:", error);
    throw error;
  }
};


export const fetchIdeaDetails = async (ideaId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ideas/ideas/${ideaId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch idea: ${response.status}`);
    }

    const data = await response.json();
    return data.idea;
  } catch (error) {
    console.error("Error fetching idea details:", error);
    throw error;
  }
};

export const submitFeedback = async (feedbackData, isDraft = false) => {
  try {
    const endpoint = isDraft
      ? "/feedback/add-feedback-draft"
      : "/feedback/add-feedback";
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...feedbackData,
        is_feed_draft: isDraft ? 1 : 0,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to ${isDraft ? "save feedback draft" : "submit feedback"}`
      );
    }

    return true;
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw error;
  }
};
