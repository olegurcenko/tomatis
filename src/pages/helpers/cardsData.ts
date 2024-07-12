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

export interface HomepageCardInterface {
	image: string;
	title: string;
	link: string;
}