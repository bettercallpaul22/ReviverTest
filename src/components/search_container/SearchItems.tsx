import React from "react";
import "./SearchItems.scss";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { projects } from "../../data/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { ProjectData } from "../../model";
import { addToList, clearList } from "../../features/project_slice";
import { clearSearch } from "../../features/search_slice";
import { Fab } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const SearchItems = () => {
  const dispatch = useDispatch();
  const searchText: string = useSelector(
    (state: RootState) => state.searchReducer.searchText
  );

  const filteredSearch = projects.filter((project) =>
    project.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );

  const handleAddProject = (project: ProjectData) => {
    const newProject = {
      id: project.id,
      name: project.name,
      project_year: project.project_year,
      project_description: project.project_description,
      project_price: project.project_price,
      content: {
        backround_of_study: {
          paragraph1: project.content.backround_of_study.paragraph1,
          paragraph2: project.content.backround_of_study.paragraph2,
          paragraph3: project.content.backround_of_study.paragraph3,
          paragraph4: project.content.backround_of_study.paragraph4,
        },
        objective_of_study: {
          paragraph1: project.content.objective_of_study.paragraph1,
          paragraph2: project.content.objective_of_study.paragraph2,
          paragraph3: project.content.objective_of_study.paragraph3,
          paragraph4: project.content.objective_of_study.paragraph4,
        },
        research_question: {
          paragraph1: project.content.research_question.paragraph1,
          paragraph2: project.content.research_question.paragraph2,
          paragraph3: project.content.research_question.paragraph3,
          paragraph4: project.content.research_question.paragraph4,
        },
        reference: {
          paragraph1: project.content.reference.paragraph1,
          paragraph2: project.content.reference.paragraph2,
          paragraph3: project.content.reference.paragraph3,
          paragraph4: project.content.reference.paragraph4,
        },
      },
    };

    dispatch(addToList(newProject));
  };

  const handleResetState = ()=>{
    dispatch(clearSearch())
    dispatch(clearList())
    }
    

  return (
    <div
      className=""
      style={{
        position:"relative",
        minHeight: "580px",
        margin: "auto",
        padding: 20,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
      }}
    >
          <Fab onClick={handleResetState} className="dismiss-search-button" color="error" aria-label="edit">
        <CloseIcon />
      </Fab>

      {filteredSearch.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {filteredSearch.map((project) => (
            <Paper
              onClick={() => {
                dispatch(clearSearch());
                handleAddProject(project);
              }}
              style={{
                width: "40%",
                padding: "16px",
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#E6E6E6",
                cursor: "pointer",
              }}
              elevation={3}
              key={project.name}
            >
              {project.name}
            </Paper>
          ))}
        </Box>
      ) : (
        <div className="empty-search">
          <img src="/images/no-results.png" alt="No results found" />
          <div className="message">No result found</div>
        </div>
      )}
    </div>
  );
};

export default SearchItems;
