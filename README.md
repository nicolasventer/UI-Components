# UI Components

This UI kit starts from `src/components/_ui/`.

From this point on, file names and paths in this README are written relative to `src/components/_ui/` unless stated otherwise.

## Table Of Contents

- [How To Install](#how-to-install)
- [How To Customize (Create A New Theme)](#how-to-customize-create-a-new-theme)
- [How To Use All Components (All Props)](#how-to-use-all-components-all-props)
- [Button](#button)
- [ButtonBreadcrumbs](#buttonbreadcrumbs)
- [Card](#card)
- [CardButton](#cardbutton)
- [Carousel](#carousel)
- [Divider](#divider)
- [FileBrowser](#filebrowser)
- [Input](#input)
- [LoadingOverlay](#loadingoverlay)
- [Modal](#modal)
- [NativeSelect](#nativeselect)
- [NodeCompare / ImageCompare](#nodecompare--imagecompare)
- [SearchInput](#searchinput)
- [Slider](#slider)
- [Switch](#switch)
- [Tab](#tab)
- [TabGroup](#tabgroup)
- [Tag](#tag)
- [Text](#text)
- [Title](#title)
- [How To Create New Components](#how-to-create-new-components)

## How To Install

To use this UI kit in your own project, start with a React project and install the required runtime dependencies:

```bash
npm install clsx@2.1.1 lucide-react@1.8.0 react@19.2.5 react-dom@19.2.5
```

Then download the `_ui` folder and place it inside your project at `src/components/_ui/`.

Download link:

[Download `src/components/_ui`](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fnicolasventer%2FUI-Components%2Ftree%2Fmain%2FClient%2Fsrc%2Fcomponents%2F_ui)

Recommended setup:

1. Create your React project.
2. Install the dependencies listed above.
3. Download the `_ui` folder from the link above.
4. Put the folder in `src/components/_ui/`.
5. Import and use the components you need from there.

## How To Customize (Create A New Theme)

Example AI prompt:

```text
Create a new theme called "midnight" for this UI kit.

Requirements:
- Duplicate an existing theme from src/components/_ui/themes/
- Name the new file midnight.css
- Keep the same structure and variable names as the existing themes
- Register the new theme in src/components/_ui/useTheme.ts
- Add the new theme to the selector in src/components/ThemeSelector.tsx
- Theme topic: futuristic night dashboard
- Expected result: the UI should feel modern, calm, high-tech, and readable for long sessions
- Main colors wanted:
  - deep navy and near-black backgrounds
  - electric blue or cyan primary accents
  - soft cool grays for neutral surfaces
  - high-contrast text that stays easy to read
- Avoid warm orange, yellow, or earthy tones
- If relevant, you may also create both a light version and a dark version of the same theme
- Do not remove or modify the existing themes unless needed for integration
```

## How To Use All Components (All Props)

All imports below are shown relative to `src/components/_ui/`.

Most components extend standard React HTML props in addition to the custom props listed here.

The most complete live examples are in:

- `../ComponentDemo.tsx`
- `../FileBrowserDemo.tsx`

### Button

```tsx
import { Button } from "@/components/_ui/Button";

<Button
	variant="filled" // "filled" | "light"
	color="theme" // "theme" | "danger" | "warning" | "success"
	size="md" // "sm" | "md" | "lg"
	icon={<Icon />}
	borderRadiusSize="lg" // "none" | "sm" | "md" | "lg"
	borderRadius={["all"]}
	borderRadiusFilter="all" // "left" | "right" | "top" | "bottom" | "all"
	circular={false}
	fullWidth={false}
	isLoading={false}
	display="both" // "icon" | "children" | "both"
	noShadow={false} // filled variant
	shadow={false} // light variant
>
	Save
</Button>
```

[Back to top](#table-of-contents)

### ButtonBreadcrumbs

```tsx
import { ButtonBreadcrumbs } from "@/components/_ui/ButtonBreadcrumbs";

<ButtonBreadcrumbs
	items={[
		{ text: "Root" },
		{ text: "Documents" },
		{ text: "Invoices", children: "Invoices" },
	]}
	separator="/"
	editable={true}
	onClick={(textArray) => console.log(textArray)}
	color="theme"
	variant="light"
/>
```

[Back to top](#table-of-contents)

### Card

```tsx
import { Card } from "@/components/_ui/Card";

<Card
	borderRadius={["all"]}
	borderRadiusFilter="all" // "left" | "right" | "top" | "bottom" | "all"
	borderRadiusSize="md" // "none" | "sm" | "md" | "lg"
	scrollable={false} // boolean | "x" | "y" | "xy"
	noShadow={false}
	scrollableDivProps={{ className: "custom-scroll-area" }}
>
	Content
</Card>
```

[Back to top](#table-of-contents)

### CardButton

```tsx
import { CardButton } from "@/components/_ui/CardButton";

<CardButton
	isActive={true}
	disabled={false}
	isLoading={false}
	borderRadiusSize="md"
	onClick={() => console.log("clicked")}
>
	Selectable card content
</CardButton>
```

[Back to top](#table-of-contents)

### Carousel

```tsx
import { Carousel } from "@/components/_ui/Carousel";

<Carousel
	items={[
		{ key: "1", title: "One" },
		{ key: "2", title: "Two" },
		{ key: "3", title: "Three" },
	]}
	itemToDisplayCount={1}
	Component={({ title }) => <div>{title}</div>}
	onItemChange={(index) => console.log(index)}
	gap={16}
	orientation="horizontal" // "horizontal" | "vertical"
	showArrows={true}
	showDots={true}
/>
```

[Back to top](#table-of-contents)

### Divider

```tsx
import { Divider } from "@/components/_ui/Divider";

<Divider
	orientation="horizontal" // "horizontal" | "vertical"
	contentPosition={0.5}
	size="md" // "sm" | "md" | "lg"
	color="theme" // "theme" | "danger" | "warning" | "success"
	margin={16}
>
	Section
</Divider>
```

[Back to top](#table-of-contents)

### FileBrowser

```tsx
import { FileBrowser } from "@/components/_ui/FileBrowser";

<FileBrowser
	currentDirectory="/"
	isLoading={false}
	entryList={[
		{ baseName: "Documents", path: "/Documents", type: "DIRECTORY" },
		{ baseName: "readme.txt", path: "/readme.txt", type: "FILE" },
	]}
	onNavigate={(path) => console.log(path)}
	entryFilter={(entry) => entry.type === "DIRECTORY"}
	maxFileToShowCount={10}
	maxFolderToShowCount={10}
	props={{
		main: { borderRadiusSize: "md" },
		content: { className: "browser-content" },
	}}
/>

// Entry
// {
//   baseName: string;
//   path: string;
//   type: "DIRECTORY" | "FILE";
// }
```

[Back to top](#table-of-contents)

### Input

```tsx
import { Input } from "@/components/_ui/Input";

<Input
	value={value}
	setValue={setValue}
	setNumberValue={setNumberValue} // useful with type="number"
	type="text"
	min={0}
	max={100}
	color="theme" // "theme" | "white" | "danger" | "warning" | "success"
	labelColor="white"
	clearable={true}
	floating={false}
	required={false}
	label="Email"
	description="Helper text"
	errorDescription=""
	placeholder="name@example.com"
/>
```

[Back to top](#table-of-contents)

### LoadingOverlay

```tsx
import { LoadingOverlay } from "@/components/_ui/LoadingOverlay";

<div style={{ position: "relative" }}>
	<LoadingOverlay
		isVisible={true}
		className="custom-overlay"
	>
		Custom loading content
	</LoadingOverlay>
</div>

// Helpers
// LoadingIcon
// PositionRelative
```

[Back to top](#table-of-contents)

### Modal

```tsx
import { Modal } from "@/components/_ui/Modal";

<Modal
	isOpen={open}
	onClose={() => setOpen(false)}
	asDrawer={false}
	title="Settings"
	icon={<Icon />}
	closeOnClickOutside={true}
	cardProps={{ borderRadiusSize: "md" }}
	fullHeight={false}
	headerProps={{ className: "modal-header" }}
	contentProps={{ className: "modal-content" }}
>
	Modal content
</Modal>
```

[Back to top](#table-of-contents)

### NativeSelect

```tsx
import { NativeSelect } from "@/components/_ui/NativeSelect";

<NativeSelect
	options={["default", "ocean", "sunset"]}
	value={theme}
	setValue={setTheme}
	required={false}
	placeholder="Choose a theme"
	color="theme" // "theme" | "white" | "danger" | "warning" | "success"
	labelColor="white"
	fullWidth={true}
	label="Theme"
	description="Choose your theme"
	errorDescription=""
/>
```

[Back to top](#table-of-contents)

### NodeCompare / ImageCompare

```tsx
import { NodeCompare } from "@/components/_ui/NodeCompare";

<NodeCompare
	beforeNode={<div>Before</div>}
	afterNode={<div>After</div>}
	sliderPosition={50}
	setSliderPosition={setSliderPosition}
	beforeLabel="Before"
	afterLabel="After"
	labelVariant="filled" // "filled" | "light"
	beforeLabelColor="danger"
	afterLabelColor="success"
	width="100%"
	height={300}
/>

// ImageCompare is an alias of NodeCompare
```

[Back to top](#table-of-contents)

### SearchInput

```tsx
import { SearchInput } from "@/components/_ui/SearchInput";

<SearchInput
	value={query}
	setValue={setQuery}
	color="theme" // "theme" | "white" | "danger" | "warning" | "success"
	clearable={true}
	placeholder="Search..."
/>
```

[Back to top](#table-of-contents)

### Slider

```tsx
import { Slider } from "@/components/_ui/Slider";

<Slider
	value={value}
	setValue={setValue}
	initialValue={50}
	min={0}
	max={100}
	step={1}
	thick={false}
/>
```

[Back to top](#table-of-contents)

### Switch

```tsx
import { Switch } from "@/components/_ui/Switch";

<Switch
	checked={enabled}
	onCheckedChange={setEnabled}
	defaultChecked={false}
	size="md" // "sm" | "md" | "lg"
	color="theme" // "theme" | "success" | "warning" | "danger"
	disabled={false}
	label="Enable notifications"
	labelPosition="right" // "left" | "right"
/>;
```

[Back to top](#table-of-contents)

### Tab

```tsx
import { Tab } from "@/components/_ui/Tab";

<Tab
	isActive={activeTab === 0}
	tabCount={3}
	orientation="horizontal" // "horizontal" | "vertical"
	color="theme"
	size="md"
	onClick={() => setActiveTab(0)}
>
	Home
</Tab>
```

[Back to top](#table-of-contents)

### TabGroup

```tsx
import { TabGroup, asTabItems } from "@/components/_ui/TabGroup";

<TabGroup
	items={asTabItems(["home", "library", "settings"])}
	value={tab}
	onValueChange={setTab}
	initialValue="home"
	color="theme"
	fullWidth={true}
	fullHeight={false}
	gap={8}
	alignItems="stretch"
	justifyContent="flex-start"
	orientation="horizontal" // "horizontal" | "vertical"
	shadow={true}
	size="md"
	borderRadiusSize="lg"
	borderRadius={["all"]}
	isLoading={false}
	display="both" // "icon" | "children" | "both"
/>
```

[Back to top](#table-of-contents)

### Tag

```tsx
import { Tag } from "@/components/_ui/Tag";

<Tag
	variant="filled"
	color="success"
	size="sm"
	icon={<Icon />}
	onClick={() => console.log("clicked")}
>
	Live
</Tag>

// Tag uses the same props as Button.
// Without onClick it behaves like a static tag.
```

[Back to top](#table-of-contents)

### Text

```tsx
import { Text } from "@/components/_ui/Text";

<Text
	icon={<Icon />}
	size="md" // "sm" | "md" | "lg"
	color="theme" // "white" | "theme" | "success" | "warning" | "danger"
	ellipsis={false}
	noWrap={false}
	br={false}
	link={false} // boolean | string
	iconProps={{}}
	textProps={{}}
>
	Hello world
</Text>
```

[Back to top](#table-of-contents)

### Title

```tsx
import { Title } from "@/components/_ui/Title";

<Title
	order={2} // 1 | 2 | 3 | 4 | 5 | 6
	icon={<Icon />}
	color="theme" // "white" | "theme" | "danger" | "warning" | "success"
	noMargin={false}
	ellipsis={false}
	noWrap={false}
	iconProps={{}}
	textProps={{}}
>
	Section title
</Title>
```

[Back to top](#table-of-contents)

## How To Create New Components

Example AI prompt:

```text
Create a new component called "BadgePill" inside src/components/_ui/.

Requirements:
- Follow the same TypeScript and prop style used by Button.tsx, Tag.tsx, and Text.tsx
- Clearly define the expected props for the component before implementing it
- Support children, icon, size, color, variant, and onClick
- Keep the API simple and consistent with the current components
- Reuse the existing UI conventions already present in src/components/_ui/
- Add a demo section in src/components/ComponentDemo.tsx
- Show all props in the demo
```
