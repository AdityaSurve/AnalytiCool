import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const gridTemplateLargeScreen = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const gridTemplateSmallScreen = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={{
        gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
        gridTemplateRows: "repeat(10,minmax(60px,1fr))",
        gridTemplateAreas: gridTemplateLargeScreen,
      }}
    >
      <Box gridArea="a" bgcolor="#2475"></Box>
      <Box gridArea="b" bgcolor="#2475"></Box>
      <Box gridArea="c" bgcolor="#2475"></Box>
      <Box gridArea="d" bgcolor="#2475"></Box>
      <Box gridArea="e" bgcolor="#2475"></Box>
      <Box gridArea="f" bgcolor="#2475"></Box>
      <Box gridArea="g" bgcolor="#2475"></Box>
      <Box gridArea="h" bgcolor="#2475"></Box>
      <Box gridArea="i" bgcolor="#2475"></Box>
      <Box gridArea="j" bgcolor="#2475"></Box>
    </Box>
  );
};

export default Dashboard;
