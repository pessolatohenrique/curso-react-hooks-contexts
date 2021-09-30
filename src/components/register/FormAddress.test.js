import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormAddress from "./FormAddress";
import { validateRequired, noValidate } from "../../utils/validation";
import { REQUIRED_MESSAGE } from "../../utils/messages";

describe("Form Address", () => {
  beforeAll(() => {
    render(
      <FormAddress
        onRegister={() => true}
        validations={{
          cep: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
          address: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
          number: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
          complement: {
            functionRef: noValidate,
            messageRef: "",
          },
          city: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
          state: {
            required: true,
            functionRef: validateRequired,
            messageRef: REQUIRED_MESSAGE,
          },
        }}
      />
    );
  });
  it("should search cep on the screen", async () => {
    const cepField = screen.getByTestId("cep").querySelector("input");

    fireEvent.blur(cepField, {
      target: { value: "01310-000" },
    });

    await waitFor(() => {
      expect(screen.getByTestId("progress")).toBeInTheDocument();
    });
  });
});
