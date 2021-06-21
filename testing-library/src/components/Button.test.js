import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button 컴포넌트 (@testing-library/react)", () => {
  it("컴포넌트가 정상적으로 생성", () => {
    const button = render(<Button />);
    expect(button).not.toBe(null);
  });
  it('"button"이라고 쓰인 엘리먼트는 HTMLButtomElement 이다.', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });
  it('버튼 클릭 시, p 태그 안에 "버튼이 방금 눌림."라고 쓰여진다', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    const p = getByText("버튼이 방금 눌림");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
  it('버튼 클릭 전에는, p 태그 안에 "버튼이 눌리지 않음"라고 쓰인다', () => {
    const { getByText } = render(<Button />);
    const p = getByText("버튼이 눌리지 않음");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
});
