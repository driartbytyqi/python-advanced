import axios from 'axios';

export const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Auth endpoints
export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};

// Workout endpoints
export const getWorkouts = async () => {
  try {
    const response = await apiClient.get('/workouts');
    return response.data;
  } catch (error) {
    console.error('Get workouts error:', error);
    throw error;
  }
};

export const getWorkoutDetails = async (workoutId) => {
  try {
    const response = await apiClient.get(`/workouts/${workoutId}`);
    return response.data;
  } catch (error) {
    console.error('Get workout details error:', error);
    throw error;
  }
};

export const createWorkout = async (workoutData) => {
  try {
    const response = await apiClient.post('/workouts', workoutData);
    return response.data;
  } catch (error) {
    console.error('Create workout error:', error);
    throw error;
  }
};

export const updateWorkout = async (workoutId, workoutData) => {
  try {
    const response = await apiClient.put(`/workouts/${workoutId}`, workoutData);
    return response.data;
  } catch (error) {
    console.error('Update workout error:', error);
    throw error;
  }
};

export const deleteWorkout = async (workoutId) => {
  try {
    const response = await apiClient.delete(`/workouts/${workoutId}`);
    return response.data;
  } catch (error) {
    console.error('Delete workout error:', error);
    throw error;
  }
};

// Progress endpoints
export const getProgressData = async () => {
  try {
    const response = await apiClient.get('/progress');
    return response.data;
  } catch (error) {
    console.error('Get progress data error:', error);
    throw error;
  }
};

// Set authorization header
export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

export default apiClient;
