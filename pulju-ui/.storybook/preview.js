<<<<<<< HEAD
=======
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
>>>>>>> fef7b50ba071329125f46f492ed65f74fca7d6dd

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
<<<<<<< HEAD
}
=======
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
>>>>>>> fef7b50ba071329125f46f492ed65f74fca7d6dd
