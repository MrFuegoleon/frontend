import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Vérifie si l'utilisateur est déjà connecté en vérifiant le token JWT
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Si un token existe, redirige vers le profil
      navigate('/profile');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://tkwbackendcdl.onrender.com/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Envoie les identifiants utilisateur
      });

      const result = await response.json();
      
      if (response.ok) {
        // Sauvegarde le token JWT dans le localStorage et redirige l'utilisateur
        localStorage.setItem('token', result.token);
        navigate('/profile');
      } else {
        setError(result.error || 'Échec de la connexion');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer. ' + err.message);
    }
  };

  return (
    <div className="container">
      {/* Left section */}
      <div className="left-section">
        <div className="content-wrapper">
          <h1 className="main-heading">Experiencesss playful, energizing, and rewarding work</h1>

          {/* Wrapper for description and list */}
          <div className="description-list-wrapper">
            <p className="description">
              <span style={{ fontWeight: 'bold' }}>Thankward</span> in three sentences:
            </p>
            <ol className="statement-list">
              <li className="statement-item">A universal and systematic wealth-creation model that simplifies the journey toward a successful life for deserving individuals.</li>
              <li className="statement-item">Values of recognition and trust that enable free and fair progress toward prosperity.</li>
              <li className="statement-item">A cutting-edge, intuitive tech platform that makes the process actionable, enjoyable, and highly powerful.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="right-section">
        <div className="login-wrapper">
          <h2 className="login-heading">Already a member?</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br />
            <input
              type="password"
              placeholder="Your password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br />
            <button type="submit" className="submit-button">Welcome</button>
          </form>

          {/* Message d'erreur */}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Landing;
