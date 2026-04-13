import { App } from "@/pages/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/components/_ui/index.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
