import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Box width="400px">
      <navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        <Route />
      </Routes>
    </Box>
  )
}

export default App
