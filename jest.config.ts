// source https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f

export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: "jsdom",
}