import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormLogin from "./FormLogin";
import { validateRequired, noValidate } from "../../utils/validation";
import { REQUIRED_MESSAGE } from "../../utils/messages";

describe("FormLogin", () => {
  beforeEach(() => {});

  it("should not submit when invalid", () => {
    render(
      <FormLogin
        onRegister={() => true}
        validations={{
          email: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
          password: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
        }}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("email").firstChild).toHaveClass("Mui-error");
    expect(screen.getByTestId("password").firstChild).toHaveClass("Mui-error");
  });

  it("should submit when valid", async () => {
    const { container } = render(
      <FormLogin
        onRegister={() => true}
        validations={{
          email: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
          password: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
        }}
      />
    );

    const emailField = screen.getByTestId("email").querySelector("input");
    const passwordField = screen.getByTestId("password").querySelector("input");

    fireEvent.change(emailField, {
      target: { value: "pessolatohenrique@gmail.com" },
    });

    fireEvent.change(passwordField, {
      target: { value: "teste-senha" },
    });

    fireEvent.click(screen.getByRole("button"));

    console.log("containerr", container.getElementsByClassName("Mui-Error"));

    expect(container.getElementsByClassName("Mui-Error"));
  });
});
