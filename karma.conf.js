module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts", // *.tsx for React Jsx
            "tests/**/*.ts"
        ],
        exclude: [
            "src/index.ts"
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        coverageIstanbulReporter: {
            reports:['text'],
            fixWebpackSourcePaths: true,
            thresholds: {
                emitWarning: false,
                global: {
                    statements: 100
                },
                each: {
                    statements: 100
                }
            }
        },
        reporters: ["coverage-istanbul"],
        browsers: ["ChromeHeadless"]
    });
};