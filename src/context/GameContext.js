import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  // Function to load player data
  const loadPlayers = async () => {
    const playersCollection = collection(db, 'players');
    const playerSnapshot = await getDocs(playersCollection);
    const playerList = playerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPlayers(playerList);
  };

  // Function to add new player
  const addPlayer = async (username, score) => {
    await addDoc(collection(db, 'players'), { username, score });
    loadPlayers();
  };

  // Load Players
  useEffect(() => {
    loadPlayers();
  }, []);

  return (
    <GameContext.Provider value={{ players, currentPlayer, setCurrentPlayer, addPlayer }}>
      {children}
    </GameContext.Provider>
  );
};