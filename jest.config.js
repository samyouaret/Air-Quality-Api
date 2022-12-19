module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest.setup.js'],
    "collectCoverage": true,
    "coverageReporters": [
        "json",
        "html"
    ]
};