import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./AppBar.scss";
import useScreenSize from "../../helper/screen_size";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Button,
  ButtonProps,
} from "@mui/material";
import { projects } from "../../data/data";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useDispatch } from "react-redux";
import { addSearchText } from "../../features/search_slice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const navItems = ["Pricing", "Blog", "About Us"];
const bg = "#DC143C";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("rgba(128, 0, 2, 0.4)"),
  backgroundColor: "rgba(128, 0, 2, 0.4)",
  // textAlign: "start",
  width: "100%",
  marginBottom: 5,
  height: 50,
  "&:hover": {
    backgroundColor: "rgba(128, 0, 2, 0.6)",
  },
}));

export default function SearchAppBar() {
  const { width, height } = useScreenSize();
  const [showAppMenu, setShowAppMenu] = React.useState(false);
  const [buttonIds, setButtonIds] = React.useState<string[]>([]);
  const [searchInput, setSearchInput] = React.useState("")
  const dispatch = useDispatch()

  const searchText: string = useSelector(
    (state: RootState) => state.searchReducer.searchText
  );

  console.log("Appbar section", searchText, searchText.length)


  const isMobile = width < 768; // Mobile devices (width less than 768px)
  const isTablet = width >= 768 && width <= 1024; // Tablet devices (width between 768px and 1024px)
  const isDesktop = width > 1024; // Desktop devices (width greater than 1024px)

  const isMobileOrTablet = isMobile || isTablet; // True if the device is mobile or tablet

  const handleButtonClick = (id: string) => {
    setButtonIds((prevIds) => {
      if (prevIds.includes(id)) {
        // If the ID already exists, remove it
        return prevIds.filter((buttonId) => buttonId !== id);
      } else {
        // Otherwise, add the ID to the array
        buttonIds.pop();

        return [...prevIds, id];
      }
    });
  };

  return (
    <div className="appbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="main-appbar"
          position="static"
          style={{ backgroundColor: "#DC143C" }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 0.5 }} className="">
              <Typography variant="h6" noWrap component="div">
                STUDENT PROJECTS
              </Typography>
            </Box>

            {!isMobileOrTablet && (
              <Box sx={{ flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Button size="large" key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 0.5 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search projects..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchInput}
                  onChange={(e)=>{
                    setSearchInput(e.target.value)
                    dispatch(addSearchText(e.target.value))
                  }}
                />
              </Search>
            </Box>

            {/* Mobile menu icon */}
            {isMobileOrTablet && (
              <IconButton
                onClick={() => {
                  setButtonIds([]);
                  setShowAppMenu(!showAppMenu);
                }}
                className=""
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop menu icon */}
            {/* {isDesktop && (
              <IconButton
                onClick={() => {
                  setButtonIds([]);
                  setShowAppMenu(!showAppMenu);
                }}
                className=""
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )} */}
          </Toolbar>
        </AppBar>
      </Box>


        {/* Desktop Slider */}

        {isMobileOrTablet && showAppMenu ? (
        <div className={showAppMenu ? "appbar-menu" : "appbar-menu-hide"}>
          <div className="">
            {projects.map((project) => (
              <div className="" style={{}}>
                <ColorButton
                  endIcon={ buttonIds.includes(project.id.toLocaleString()) ? <ArrowForwardIosIcon /> : <DescriptionIcon />}
                  onClick={() => handleButtonClick(project.id.toLocaleString())}
                  key={project.id}
                  variant="contained"
                >
                  {project.name}
                </ColorButton>
                {buttonIds.includes(project.id.toLocaleString()) && (
                  <div
                    className="project-content"
                    style={{
                      backgroundColor: "whitesmoke",
                      color: "#333333",
                      borderRadius: 3,
                      padding: 10,
                      marginBottom: 20,
                      marginLeft: 10,
                    }}
                  >
                    <strong>{project.project_description}</strong>
                    <p>{project.content.backround_of_study.paragraph1}</p>
                    <Button variant="contained" endIcon={<DescriptionIcon />}>
                      Get Project Document
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}



    </div>
  );
}
