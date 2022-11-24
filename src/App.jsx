import React, {useState} from "react";
import {
  MenuList,
  AppBar,
  MenuListItem,
  Separator,
  styleReset,
  Toolbar,
  Button,
  TextInput,
} from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;
// const [open, setOpen] = useState(false);
const App = () => (
  
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            Start
          </Button>
          <TextInput placeholder="Search..." width={150} />
        </Toolbar>
      </AppBar>
      <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList>
    </ThemeProvider>
  </>
);

export default App;
