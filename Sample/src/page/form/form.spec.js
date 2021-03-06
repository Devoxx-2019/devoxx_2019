import React from "react";
import { render, waitForDomChange } from "react-testing-library";
import Component from "./form";

describe("Form test suite", () => {
  const users = [
    {
      id: "1",
      login: "login1",
      avatar_url: "http://avatar1.jpg",
      html_url: "http://comptegithub.com"
    },
    {
      id: "2",
      login: "login2",
      avatar_url: "http://avatar2.jpg",
      html_url: "http://comptegithub.com"
    },
    {
      id: "3",
      login: "login3",
      avatar_url: "http://avatar3.jpg",
      html_url: "http://comptegithub.com"
    }
  ];

  const inputs = {
    githubAccount: {
      value: "test",
      id: "githubAccount",
      message: "erreur de saisie"
    }
  };
  it("renders correctly", async () => {
    const { asFragment , container} = render(
      <Component
        users={users}
        inputs={inputs}
        onChange={() => {}}
        onClick={() => {}}
        hasSubmitOnce={true}
      />
    );

    //We wait for user loading
    await waitForDomChange({ container });
    expect(asFragment()).toMatchSnapshot();
  });
});
