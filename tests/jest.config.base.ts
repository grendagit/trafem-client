import type { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/tests/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/file-mock.ts',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/tests/loadershim.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup-test-env.ts'],
}

export default jestConfig
