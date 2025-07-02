const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,  // 1 minute
  max: 3,                   // Limit each IP to 3 requests
  message: {
    status: 429,
    error: 'Too many requests. Please try again after a minute.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
