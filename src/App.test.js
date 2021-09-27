import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render the first component", () => {
    const { container, getByText } = render(<App />);
    expect(getByText("Cadastre-se")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
