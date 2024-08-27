 export interface ProjectData {
  name: string;
  id: number;
  project_year: string;
  project_description: string;
  project_price: string;
  content: {
    backround_of_study:{
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
    objective_of_study:{
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
    research_question:{
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
    reference:{
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
      
  }
} 