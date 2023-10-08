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
  console.log(project);

  return (
    <div>
      <VtmnModal open={open} onClose={onClose}>
        <VtmnModalTitle>Apply on Project Title</VtmnModalTitle>
        <div>{project.summery[0]}</div>

        <div style={{ display: "flex" }}>
          <div>Start Date:</div>
          {project.start_date}
        </div>
        <div style={{ paddingTop: 20, paddingBottom: 20 }}>
          <VtmnTextInput
            icon="home-fill"
            identifier="vtmn-input"
            labelText="Full name"
            onIconClick={function noRefCheck() {}}
            placeholder="full name"
          />
          <VtmnTextInput
            icon="home-fill"
            identifier="vtmn-input"
            labelText="Enter your email"
            onChange={function noRefCheck() {}}
            placeholder="email"
          />
          <VtmnTextInput
            icon="home-fill"
            identifier="vtmn-input"
            labelText="Enter description"
            onChange={function noRefCheck() {}}
            placeholder="description"
          />
        </div>
        <VtmnButton
          onClick={() => {
            onClose();
          }}
        >
          Send mail
        </VtmnButton>
      </VtmnModal>
    </div>
  );
}
