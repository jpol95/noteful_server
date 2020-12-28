module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dundermiffling:1Pepperm%40n@localhost/noteful',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'noteful.jpol95.vercel.app'
  }