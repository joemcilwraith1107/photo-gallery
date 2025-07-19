export type LayoutProps = {
	children: React.ReactNode;
	modal: React.ReactNode;
};

export type PhotoDisplay = {
	photo: PhotoData;
};

export type ImagesData = {
	type: Type;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	fileId: string;
	tags: string[];
	AITags: null;
	versionInfo: VersionInfo;
	embeddedMetadata: EmbeddedMetadata | null;
	customCoordinates: null;
	customMetadata: CustomMetadata;
	isPrivateFile: boolean;
	url: string;
	thumbnail: string;
	fileType: FileType;
	filePath: string;
	height: number;
	width: number;
	size: number;
	hasAlpha: boolean;
	mime: MIME;
};

export type PhotoData = {
	type: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	fileId: string;
	tags: string[];
	AITags: null;
	versionInfo: VersionInfo;
	embeddedMetadata: EmbeddedMetadata;
	customCoordinates: null;
	customMetadata: CustomMetadata;
	isPrivateFile: boolean;
	url: string;
	thumbnail: string;
	fileType: string;
	filePath: string;
	height: number;
	width: number;
	size: number;
	hasAlpha: boolean;
	mime: string;
};

export interface CustomMetadata {
	"Aspect Ratio": AspectRatio;
	Caption: string;
}

export enum AspectRatio {
	Landscape = "Landscape",
	Portrait = "Portrait",
	Square = "Square",
}

export interface EmbeddedMetadata {
	Make: string;
	Model: string;
	ModifyDate: string;
	FNumber: number;
	ISO: number;
	ApertureValue: number;
	ExposureCompensation?: number;
	MeteringMode: string;
	Flash: string;
	WhiteBalance: string;
	ExifVersion: string;
	XResolution: number;
	YResolution: number;
	ResolutionUnit: string;
	DateTimeOriginal: Date;
	ColorSpace: string;
	ApplicationRecordVersion: number;
	DateCreated: Date;
	DateTimeCreated: Date;
}

export enum FileType {
	Image = "image",
}

export enum MIME {
	ImageJPEG = "image/jpeg",
}

export enum Type {
	File = "file",
}

export interface VersionInfo {
	id: string;
	name: Name;
}

export enum Name {
	Version1 = "Version 1",
}

export interface CustomMetadata {
	"Aspect Ratio": AspectRatio;
	Caption: string;
}

export interface EmbeddedMetadata {
	Make: string;
	Model: string;
	ModifyDate: string;
	FNumber: number;
	ISO: number;
	ApertureValue: number;
	ExposureCompensation?: number;
	MeteringMode: string;
	Flash: string;
	WhiteBalance: string;
	ExifVersion: string;
	XResolution: number;
	YResolution: number;
	ResolutionUnit: string;
	DateTimeOriginal: Date;
	ColorSpace: string;
	ApplicationRecordVersion: number;
	DateCreated: Date;
	DateTimeCreated: Date;
}

export interface VersionInfo {
	id: string;
	name: Name;
}
