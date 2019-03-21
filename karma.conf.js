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
        coverageReporter: {
            reporters: [{type: 'lcov'}]
        },
        reporters: ['progress', 'coverage'],
        browsers: ["ChromeHeadless"]
    });
};