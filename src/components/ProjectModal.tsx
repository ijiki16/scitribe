import {
  VtmnButton,
  VtmnModal,
  VtmnModalTitle,
  VtmnTextInput,
} from "@vtmn/react";
import { useState } from "react";

interface ProjectModalProps {
  open: boolean;
  project: any;
  onClose: () => void;
}

export default function ProjectModal(props: ProjectModalProps) {
  const { open, project, onClose } = props;
  const [description, setDescription] = useState("");
  console.log(project);

  return (
    <div>
      <VtmnModal open={open} onClose={onClose}>
        <VtmnModalTitle>Apply on Project Title</VtmnModalTitle>
        <div>{project.summery[0]}</div>
        <div style={{ paddingTop: 20, paddingBottom: 20 }}>
          <VtmnTextInput
            icon="home-fill"
            identifier="vtmn-input"
            labelText="Enter your description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            placeholder="description"
          />

          <VtmnTextInput
            icon="home-fill"
            identifier="vtmn-input"
            labelText="Full name"
            onIconClick={function noRefCheck() {}}
            placeholder="full name"
          />
        </div>
        <VtmnButton
          onClick={() => {
            setDescription("");
            onClose();
          }}
        >
          Send mail
        </VtmnButton>
      </VtmnModal>
    </div>
  );
}
