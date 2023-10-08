"use client";
import {
  VtmnList,
  VtmnListItem,
  VtmnSearch,
  VtmnCheckbox,
  VtmnButton,
  VtmnIcon,
  VtmnCard,
} from "@vtmn/react";
import { FieldOfScience } from "../../../lib/types";
import { useEffect, useState } from "react";
import categories from "../../../data/categories.json";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [curProject, setCurProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [fieldOfScience, setFieldOfScience] = useState<Array<string>>([]);
  const data = categories as any;

  const [projectList, setProjectList] = useState(data["animals"]);

  console.log(data[fieldOfScience[0]]);

  useEffect(() => {
    const projects: any[] = [];

    if (fieldOfScience.length > 0) {
      fieldOfScience.forEach((item) => {
        console.log("item", item);
        const list = data[item];

        projects.push(list);
      });

      setProjectList(projects.flat());
    }
  }, [fieldOfScience, data]);

  return (
    <main>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 34, margin: 40 }}
      >
        <div>
          <VtmnSearch
            onClear={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            placeholder="Search"
            showSearchButton
            size="medium"
            variant="default"
          />
          <div>
            <VtmnButton
              variant="ghost"
              onClick={() => setDropDown(!dropDown)}
              iconRight="arrow-down-line"
            >
              Filed of Science:
              <VtmnIcon size={24} value="arrow-down-line" variant="default" />
            </VtmnButton>

            {dropDown && (
              <VtmnList>
                {Object.values(FieldOfScience).map((data, index) => (
                  <VtmnListItem id={data} key={index}>
                    <VtmnCheckbox
                      identifier={index.toString()}
                      labelText={data}
                      checked={fieldOfScience.includes(
                        data.toLocaleLowerCase()
                      )}
                      value={data}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFieldOfScience([
                            ...fieldOfScience,
                            data.toLowerCase(),
                          ]);
                        } else {
                          setFieldOfScience(
                            fieldOfScience.filter(
                              (field) => field != data.toLowerCase()
                            )
                          );
                        }
                      }}
                    />
                  </VtmnListItem>
                ))}
              </VtmnList>
            )}
          </div>
        </div>

        <div style={{ padding: "0 60px", marginBottom: "120px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>Pojects</div>
          </div>

          <div style={{ width: "1000px" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {projectList.map((project: any, index: number) => (
                <div
                  style={{ width: 300, height: 450, flex: "1 1 0px" }}
                  key={index}
                >
                  <VtmnCard
                    title={project.position}
                    // img={
                    //   <Image
                    //     src={project.image}
                    //     alt={"projects " + index + " image"}
                    //     width={268}
                    //     height={218}
                    //     style={{
                    //       width: "100%",
                    //       height: "auto",
                    //       objectFit: "cover",
                    //     }}
                    //   />
                    // }
                  >
                    {/* <div style={{ paddingTop: 10 }}>{project.description}</div> */}
                  </VtmnCard>
                  <VtmnButton
                    onClick={() => {
                      setOpenModal(true);
                      setCurProject(project);
                    }}
                  >
                    Learn more
                  </VtmnButton>
                </div>
              ))}
            </div>
          </div>
          {openModal && <ProjectModal open={openModal} project={curProject} />}
        </div>
      </div>
    </main>
  );
}
