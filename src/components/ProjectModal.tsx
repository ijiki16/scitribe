import { VtmnModal, VtmnModalTitle } from "@vtmn/react";

interface ProjectModalProps {
  open: boolean;
  project: any;
}

export default function ProjectModal(props: ProjectModalProps) {
  const { open, project } = props;
  console.log(project);

  return (
    <div>
      <VtmnModal open={open}>
        <VtmnModalTitle>Apply on Project Title</VtmnModalTitle>
        {/* <VtmnModalTitle>{project.title}</VtmnModalTitle> */}
      </VtmnModal>
    </div>
  );
}
