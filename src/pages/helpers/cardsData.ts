export interface StepData {
	label: string,
	description: string
}

export interface CardInterface {
	image: string;
	title: string;
	text: string;
	link: string;
	steps?: StepData[]
}