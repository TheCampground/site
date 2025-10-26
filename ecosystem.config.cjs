module.exports = {
    apps: [
        {
            name: "campground",
            script: "build/index.js",
            watch: ["build"],
            env: {
                NODE_ENV: "production",
                HOST: "0.0.0.0",
                ORIGIN: "https://thecampground.dev",
                PORT: 2025
            }
        }
    ]
}
