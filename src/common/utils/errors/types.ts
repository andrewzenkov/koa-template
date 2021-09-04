export interface IError {
	isInternal: boolean;
	isCustom: boolean;
	message: string;
	stack?: any;
	status?: number;
}
