import { useEffect, useState } from "react";

export type ColorScheme = "light" | "dark";

export const useColorScheme = () => {
	const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
		const attr = document.documentElement.getAttribute("data-theme");
		return attr === "dark" ? "dark" : "light";
	});

	const setColorScheme = (newColorScheme: ColorScheme) => {
		document.documentElement.setAttribute("data-theme", newColorScheme);
		setColorSchemeState(newColorScheme);
	};

	const toggleColorScheme = () => {
		const newScheme: ColorScheme = colorScheme === "light" ? "dark" : "light";
		setColorScheme(newScheme);
		return newScheme;
	};

	useEffect(() => {
		if (!document.documentElement.getAttribute("data-theme")) {
			document.documentElement.setAttribute("data-theme", "light");
		}
	}, []);

	return {
		colorScheme,
		setColorScheme,
		toggleColorScheme,
	};
};
