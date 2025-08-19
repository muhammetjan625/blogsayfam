// config.js
// Site adı ve varsayılan admin bilgileri (DEMO!)
export const SITE_NAME = "Basit Blog";
export const ADMIN_USERNAME = "admin";

// Varsayılan şifre: admin123
export const ADMIN_DEFAULT_PASSWORD_HASH = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"; // sha256("password") not correct
// Correct sha256 for "admin123":
/*
  "admin123" sha256:
  240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9
*/
export const ADMIN_DEFAULT_PASSWORD_HASH_CORRECT = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9";
