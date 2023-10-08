export interface Project {
  url: string;
  title: string;
  text: string;
  fieldOfSince: FieldOfSince;
}

export enum FieldOfSince {
  Animals = "Animals",
  ArchaeologyCultural = "Archaeology & cultural",
  AstronomySpace = "Astronomy & space",
  Biology = "Biology",
  Birds = "Birds",
  Chemistry = "Chemistry",
  ClimateWeather = "Climate & weather",
  ComputersTechnology = "Computers & Technology",
  DisasterResponse = "Disaster response",
  EcologyEnvironment = "Ecology & environment",
  Education = "Education",
  Food = "Food",
  Geography = "Geography",
  GeologyEarthScience = "Geology & earth science",
}

export interface User {
  username: string;
  password: string;
  email: string;
  name: string;
  surname: string;
}
