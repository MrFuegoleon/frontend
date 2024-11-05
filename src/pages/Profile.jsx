import React, { useState, useEffect ,useCallback} from 'react';
import './Profile.css';
import AllIdeas from '../components/AllIdeas';
import IdeaForm from '../components/IdeaForm';
import FeedbackForm from '../components/FeedbackForm';
import ViewFeedback from '../components/ViewFeedback';
import IdeaPreview from '../components/IdeaPreview';
import Projects from '../components/Projects';
import { fetchIdeaDrafts, checkAuthStatus } from '../API/fetchIdeaForm';
import pic from '../assets/user profile.jpg';
import vector from '../images/vector.png';
import heartIcon from '../images/gem.png';
import coinIcon from '../images/coinIcon.png';
import pieChartIcon from '../images/pieChartIcon.png';
import plusIcon from '../images/plusIcon.png';
import FixedSidebar from '../components/FixedSidebar';

const API_BASE_URL = 'https://tkwbackendcdl.onrender.com';

function Profile() {
  const [isSplit, setIsSplit] = useState(false);
  const [showIdeaForm, setShowIdeaForm] = useState(false);
  const [showIdeaPreview, setShowIdeaPreview] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showViewFeedback, setShowViewFeedback] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [votesData, setVotesData] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const authenticateUser = async () => {
      setLoading(true);
      try {
        const user = await checkAuthStatus();
        setLoggedInUser(user);
        if (user) {
          fetchUserScore(user.id);
        }
      } catch (error) {
        window.location.href = '/';
      } finally {
        setLoading(false);
      }
    };
    authenticateUser();
    fetchIdeas();
    fetchTotalUsers();
    fetchDrafts();
  }, []);

  const fetchUserScore = async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/members/${userId}/score`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.success) {
        setUserScore(data.score);
      } else {
        console.error('Failed to fetch user score:', data.message);
      }
    } catch (err) {
      console.error('Error fetching user score:', err);
    }
  };

  const fetchIdeas = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/ideas/ideas`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.success) {
        setIdeas(data.ideas);
        setVotesData(data.votesData);
      } else {
        console.error('Failed to fetch ideas:', data.message);
      }
    } catch (err) {
      console.error('Error fetching ideas from backend:', err);
    }
  };

  const fetchTotalUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/members`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setTotalUsers(data.totalUsers);
    } catch (err) {
      console.error('Error fetching total users:', err);
    }
  };

  const fetchDrafts = async () => {
    try {
      const draftsData = await fetchIdeaDrafts();
      setDrafts(draftsData.drafts);
    } catch (err) {
      console.error('Error fetching drafts:', err);
    }
  };

  const handleNewIdea = () => {
    setShowIdeaForm(!showIdeaForm);
    setShowProjects(false); // Hide projects when showing the idea form
    setShowIdeaPreview(false);
    setShowFeedbackForm(false);
    setShowViewFeedback(false);
    setIsSplit(!isSplit);
    setSelectedIdea(null);
  };
  
  const handleIdeaPreview = (ideaId) => {
    const idea = ideas.find((i) => i.idea_id === ideaId);
    setSelectedIdea(idea);
    setShowIdeaPreview(true);
    setShowIdeaForm(false);
    setShowFeedbackForm(false);
    setShowViewFeedback(false);
    setIsSplit(true);
    setShowProjects(false);
  };
  
  const handleClosePreview = () => {
    setShowIdeaPreview(false);
    setIsSplit(false);
    setSelectedIdea(null);
  };
  
  const handleGiveFeedback = (ideaId) => {
    const idea = ideas.find((i) => i.idea_id === ideaId);
    setSelectedIdea(idea);
    setShowFeedbackForm(!showFeedbackForm);
    setShowIdeaForm(false);
    setShowIdeaPreview(false); // Ensure Idea Preview is hidden
    setShowViewFeedback(false);
    setIsSplit(!isSplit);
  };
  
  const handleEditDraftSplit = useCallback((draft) => {
    console.log("Editing draft:", draft);
    setSelectedIdea(draft);
    setShowIdeaForm(true);
    setShowIdeaPreview(false);
    setShowFeedbackForm(false);
    setShowViewFeedback(false);
    setIsSplit(true);
    setShowProjects(false);
  }, []);
   // Ajout d'un effet pour gérer la synchronisation
   useEffect(() => {
    if (selectedIdea?.is_draft && !showIdeaForm) {
      setShowIdeaForm(true);
      setIsSplit(true);
    }
  }, [selectedIdea]);

  const handleViewFeedback = (ideaId) => {
    const idea = ideas.find((i) => i.idea_id === ideaId);
    setSelectedIdea(idea);
    setShowViewFeedback(!showViewFeedback);
    setShowIdeaForm(false);
    setShowIdeaPreview(false); // Ensure Idea Preview is hidden
    setShowFeedbackForm(false); // Ensure Feedback Form is hidden
    setIsSplit(!isSplit);
  };
  

  const handleToggleProjects = () => {
    setShowProjects(!showProjects);
    setShowIdeaForm(false);
    setShowIdeaForm(false); // Hide idea form when showing projects
    setShowIdeaPreview(false);
    setShowFeedbackForm(false);
    setShowViewFeedback(false);
    setIsSplit(!isSplit);
  };

  return (
    <div className={`profilePage ${isSplit ? 'split' : ''}`}>
      {/* Sidebar */}
      <div className={`profileContainer ${isSplit ? 'filtered' : ''}`}>
        <div>
          <img src={vector} alt="vector" className="vector" onClick={() => window.location.href = 'http://localhost:3000/profile'}/>
        </div>
        <h1 className='headerText'>
          Hello {loggedInUser ? loggedInUser.nom : 'Loading...'} <br />
          Welcome to your space of trust, recognition <br />
          and empowered collaboration
        </h1>
        {loading ? (
          <div>Loading user data...</div>
        ) : loggedInUser ? (
          <div className="userInfo">
            <span className="userName">{loggedInUser.nom}</span>
          </div>
        ) : (
          <div>User not found</div>
        )}
        <button className="filterButton" onClick={handleToggleProjects}>
          {showProjects ? 'Hide Projects' : 'Show Projects'}
        </button>
        <AllIdeas
          ideas={ideas}
          drafts={drafts.filter(draft => draft.member_id === loggedInUser?.id)}
          votesData={votesData}
          handleGiveFeedback={handleIdeaPreview}
          handleViewFeedback={handleViewFeedback}
          handleEditDraft={handleEditDraftSplit}
          selectedIdea={selectedIdea}
          setSelectedIdea={setSelectedIdea}
          totalUsers={totalUsers}
          loggedInUser={loggedInUser}
          showIdeaForm={showIdeaForm}
        />
        <div className='bar'>
          <FixedSidebar 
            handleNewIdea={handleNewIdea}
            userScore={userScore}
          />
        </div>
      </div>

      {showIdeaForm && (
        <div className="ideaCreationForm">
          <IdeaForm 
            onFlecheClick={() => {
              setIsSplit(false);
              setShowIdeaForm(false);
              setSelectedIdea(null);
            }} 
            selectedIdea={selectedIdea}
            onUpdate={(updatedDraft) => {
              setSelectedIdea(updatedDraft);
              fetchDrafts(); // Rafraîchir la liste des drafts
            }}
          />
        </div>
      )}

      {showIdeaPreview && selectedIdea && (
        <div className="ideaCreationForm">
          <IdeaPreview ideaId={selectedIdea.idea_id} 
          votesData={votesData}
          onFlecheClick={handleClosePreview} />
        </div>
      )}

      {showFeedbackForm && selectedIdea && (
        <div className="feedbackFormWrapper">
          <FeedbackForm idea={selectedIdea} handleSubmitFeedback={handleSubmitFeedback} />
        </div>
      )}

      {showViewFeedback && selectedIdea && (
        <div className="viewFeedbackWrapper">
          <ViewFeedback idea={selectedIdea} votesData={votesData} />
        </div>
      )}

      {showProjects && (
        <div className="projectsSection">
          <Projects />
        </div>
      )}
    </div>
  );
}

export default Profile;
