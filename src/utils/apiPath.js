export const BSE_URL = "http://localhost:4600";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", //To Register
    LOGIN: "/api/auth/login", //To Login
    GET_PROFILE: "/api/auth/profile", //To Get User
  },
  RESUME: {
    CREATE: "/api/resume", //Create a new resume
    GET_ALL: "/api/resume", //Get all resume of loggedIn User
    GET_BY_ID: (id) => `/api/resume/${id}`, //Get a specific resume
    UPDATE: (id) => `/api/resume${id}`, //Update a resume
    DELETE: (id) => `/api/resume${id}`, //Delete a resume
    UPLOAD_IMAGES: (id) => `/api/resume${id}/upload-images` //Upload Thumbnail and Resume Profile Img
  },

  IMAGE: {
    UPLOAD_IMAGE: "api/auth/uploade-image"
  }
};
