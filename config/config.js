const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "MOBIK_secret_key",
    mongoUri: "mongodb+srv://mobik:123qwe@cluster0.y5ijq.mongodb.net/social?retryWrites=true&w=majority"
}

export default config
