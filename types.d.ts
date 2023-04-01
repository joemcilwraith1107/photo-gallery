import { Dispatch, SetStateAction } from 'react'

interface GalleryProps {
  photos: PhotoItems[]
  tags: string[]
}

interface ModalProps {
  onClose: () => void
  children: any
}

interface ImageGridProps {
  filteredPhotos: PhotoItems[]
}

interface FilterProps {
  photos: PhotoItems[]
  tags: string[]
  setFilteredPhotos: Dispatch<SetStateAction<PhotoItems[]>>
}

interface PhotoProps {
  url: string
  caption: string
}

interface ImageDisplayProps {
  modal: boolean
  photo: string
  caption: string
}

interface PhotoItems {
  id: string
  url: string
  caption: string
  tags: string[]
}

interface IKResponse {
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

