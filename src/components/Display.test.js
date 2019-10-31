import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";
import "@testing-library/react";

describe("<Display />", () => {
    test("renders without crashing", () => {
        render(<Display />);
    });
    test("props work", () => {
        const display = render(<Display />);
        display.getByText(/ball/i);
        display.getByText(/strike/i);
        display.getByText(/outs/i);
        display.getByText(/inning/i);
        display.getByText(/score/i);
        display.getByText(/base/i);
    });
});

