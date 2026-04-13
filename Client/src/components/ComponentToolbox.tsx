import styles from "./ComponentToolbox.module.css";

export const Horizontal = ({
	children,
	gap,
	marginTop,
	justifyContent,
	widthFull,
	alignItems,
	overflowAuto,
	padding,
	style,
	height,
}: {
	children: React.ReactNode;
	gap?: number;
	marginTop?: number | string;
	justifyContent?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
	widthFull?: boolean;
	alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
	overflowAuto?: boolean;
	padding?: number;
	style?: React.CSSProperties;
	height?: number;
}) => (
	<div
		className={styles.horizontal}
		style={{
			gap,
			marginTop,
			justifyContent,
			width: widthFull ? "100%" : "auto",
			alignItems,
			overflow: overflowAuto ? "auto" : "visible",
			padding,
			height,
			...style,
		}}
	>
		{children}
	</div>
);

export const Vertical = ({
	children,
	gap,
	marginTop,
	justifyContent,
	padding,
	widthFull,
	alignItems,
	style,
	heightFull,
	overflowAuto,
	flexGrow,
}: {
	children: React.ReactNode;
	gap?: number;
	marginTop?: number;
	justifyContent?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
	padding?: number;
	widthFull?: boolean;
	alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
	style?: React.CSSProperties;
	heightFull?: boolean;
	overflowAuto?: boolean;
	flexGrow?: boolean;
}) => (
	<div
		className={styles.vertical}
		style={{
			gap,
			marginTop,
			justifyContent,
			padding,
			width: widthFull ? "100%" : "auto",
			alignItems,
			height: heightFull ? "100%" : "auto",
			overflow: overflowAuto ? "auto" : "visible",
			flexGrow: flexGrow ? 1 : 0,
			...style,
		}}
	>
		{children}
	</div>
);
