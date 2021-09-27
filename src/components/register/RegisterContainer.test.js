import { render, screen } from "@testing-library/react";
import RegisterContainer from "./RegisterContainer";

const ROLES_LENGHT = 4;
describe("Register Container", () => {
  it("should render four steps", () => {
    render(<RegisterContainer />);
    const roles = screen.getAllByRole("custom-step");

    expect(roles.length).toBe(ROLES_LENGHT);
    expect(roles[0].textContent).toBe("1Login");
  });
});
