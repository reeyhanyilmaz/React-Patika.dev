import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter Tests", () => {
    //describe ile tanım yaparak icerigini alttaki gibi dolduruyoruz.

	let increaseBtn, decreaseBtn, count;

    //baslamadan önce bakar. Hepsini toparlamak icin teker teker yazmamak icin. beforeEach calısır sonra test  calısır. sonra tekrar beforeEach calısır sonra tekrar test 2 calısır. 

	beforeEach(() => {
		console.log("Her testten önce çalışacağım!");
		render(<Counter />);
		increaseBtn = screen.getByText("Increase");
		decreaseBtn = screen.getByText("Decrease");
		count = screen.getByText("0");
	});

    //tüm testlerden önce 1 kere calsıır sadece.
	beforeAll(() => {
		console.log("İlk başta bir kere çalışacağım!");
	});

    //her testen snra calısır.
	afterEach(() => {
		console.log("Her testten sonra çalışacağım!");
	});

    //herseyden sonra calısır.
	afterAll(() => {
		console.log("En son bir kere çalışacağım!");
	});

    //buraya test de it'de yazabiliriz. it olmalı anlamı tasır.
	test("increase btn", () => {
		userEvent.click(increaseBtn);
		expect(count).toHaveTextContent("1");
	});

	test("decrease btn", () => {
		userEvent.click(decreaseBtn);
		expect(count).toHaveTextContent("-1");
	});
});