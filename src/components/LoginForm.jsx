import { useState } from 'react';
import axios from 'axios';
import Header from './MainHeader/Header';
import Faq from './FAQ/Faq';
import About from './AboutUs/About';
import Footer from './Footer/Footer';


const projectID = '3b8051bb-9e42-45b8-91c4-4ada9d4be51b';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Credenciais incorretas, tente novamente.');
    }
  };

  return (
    <div className="header">
        <Header />
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Bem Vindo!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Usuário" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Senha" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Ir para o Chat</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
    <Faq />
    <About />
    <Footer />
    </div>
    

  );
};

export default Modal;