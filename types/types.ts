import { Dispatch, SetStateAction } from 'react'

export interface GalleryProps {
  photos: PhotoItems[]
  tags: string[]
}

export interface ModalProps {
  onClose: () => void
  children: any
}

export interface ImageGridProps {
  filteredPhotos: PhotoItems[]
}

export interface FilterProps {
  photos: PhotoItems[]
  tags: string[]
  setFilteredPhotos: Dispatch<SetStateAction<PhotoItems[]>>
}

export interface PhotoProps {
  url: string
  caption: string
}

export interface ImageDisplayProps {
  modal: boolean
  photo: string
  caption: string
}

export interface PhotoItems {
  id: string
  url: string
  caption: string
  tags: string[]
}

export interface IKResponse {
  type:              Type;
  name:              string;
  createdAt:         Date;
  updatedAt:         Date;
  fileId:            string;
  tags:              Tag[];
  AITags:            null;
  versionInfo:       VersionInfo;
  embeddedMetadata:  EmbeddedMetadata | null;
  customCoordinates: null;
  customMetadata:    CustomMetadata;
  isPrivateFile:     boolean;
  url:               string;
  thumbnail:         string;
  fileType:          FileType;
  filePath:          string;
  height:            number;
  width:             number;
  size:              number;
  hasAlpha:          boolean;
  mime:              MIME;
}

interface CustomMetadata {
  "Aspect Ratio": AspectRatio;
  Caption:        string;
}

enum AspectRatio {
  Landscape = "Landscape",
  Portrait = "Portrait",
  Square = "Square",
}

interface EmbeddedMetadata {
  Make:                     string;
  Model:                    string;
  ModifyDate:               string;
  FNumber:                  number;
  ISO:                      number;
  ApertureValue:            number;
  ExposureCompensation?:    number;
  MeteringMode:             string;
  Flash:                    string;
  WhiteBalance:             string;
  ExifVersion:              string;
  XResolution:              number;
  YResolution:              number;
  ResolutionUnit:           string;
  DateTimeOriginal:         Date;
  ColorSpace:               string;
  ApplicationRecordVersion: number;
  DateCreated:              Date;
  DateTimeCreated:          Date;
}

enum FileType {
  Image = "image",
}

enum MIME {
  ImageJPEG = "image/jpeg",
}

enum Tag {
  BlackAndWhite = "black and white",
  Detail = "detail",
  Light = "light",
  Mist = "mist",
  Mountains = "mountains",
  Trees = "trees",
  Urban = "urban",
  Water = "water",
}

enum Type {
  File = "file",
}

interface VersionInfo {
  id:   string;
  name: Name;
}

enum Name {
  Version1 = "Version 1",
}

