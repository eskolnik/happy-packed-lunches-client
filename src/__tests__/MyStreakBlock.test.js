import React from "react";
import { render, fireEvent } from "react-testing-library";
import MyStreakBlock from "../MyStreakBlock";

describe("MyStreakBlock", () => {
  it("Displays a streak counter", () => {
    const { getByText } = render(<MyStreakBlock streak={2} />);
    expect(getByText("My Streak: 2 Days")).toBeVisible();
  });

  it("Updates the streak", () => {
    const updateSpy = jest.fn();
    const { getByText } = render(<MyStreakBlock streak={1} handleClickUpdate={updateSpy} />);
    const updateButton = getByText('Update');
    fireEvent.click(updateButton);
    expect(updateSpy).toHaveBeenCalled();
  });

  it("Resets the streak", () => {
    const resetSpy = jest.fn();
    const { getByText } = render(<MyStreakBlock streak={1} handleClickReset={resetSpy} />);
    const resetButton = getByText('Reset');
    fireEvent.click(resetButton);
    expect(resetSpy).toHaveBeenCalled();
  });
});
