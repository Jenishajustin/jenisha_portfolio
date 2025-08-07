import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/visitor";

// Only tracks the visitor — no view count is fetched
export const trackVisitor = () => axios.post(BASE_URL);
