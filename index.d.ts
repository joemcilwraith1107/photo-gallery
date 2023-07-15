type ModalProps = {
  children: any
}

type LayoutProps = {
  children: React.ReactNode
  modal: React.ReactNode
}

type ImageDisplay = {
  modal: boolean
  photo: PhotoData
}

type ImagesData = {
  type: Type
  name: string
  createdAt: Date
  updatedAt: Date
  fileId: string
  tags: string[]
  AITags: null
  versionInfo: VersionInfo
  embeddedMetadata: EmbeddedMetadata | null
  customCoordinates: null
  customMetadata: CustomMetadata
  isPrivateFile: boolean
  url: string
  thumbnail: string
  fileType: FileType
  filePath: string
  height: number
  width: number
  size: number
  hasAlpha: boolean
  mime: MIME
}

type PhotoData = {
  type: string
  name: string
  createdAt: Date
  updatedAt: Date
  fileId: string
  tags: string[]
  AITags: null
  versionInfo: VersionInfo
  embeddedMetadata: EmbeddedMetadata
  customCoordinates: null
  customMetadata: CustomMetadata
  isPrivateFile: boolean
  url: string
  thumbnail: string
  fileType: string
  filePath: string
  height: number
  width: number
  size: number
  hasAlpha: boolean
  mime: string
}

interface CustomMetadata {
  'Aspect Ratio': AspectRatio
  Caption: string
}

enum AspectRatio {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
}

interface EmbeddedMetadata {
  Make: string
  Model: string
  ModifyDate: string
  FNumber: number
  ISO: number
  ApertureValue: number
  ExposureCompensation?: number
  MeteringMode: string
  Flash: string
  WhiteBalance: string
  ExifVersion: string
  XResolution: number
  YResolution: number
  ResolutionUnit: string
  DateTimeOriginal: Date
  ColorSpace: string
  ApplicationRecordVersion: number
  DateCreated: Date
  DateTimeCreated: Date
}

enum FileType {
  Image = 'image',
}

enum MIME {
  ImageJPEG = 'image/jpeg',
}

enum Type {
  File = 'file',
}

interface VersionInfo {
  id: string
  name: Name
}

enum Name {
  Version1 = 'Version 1',
}

interface CustomMetadata {
  'Aspect Ratio': string
  Caption: string
}

interface EmbeddedMetadata {
  Make: string
  Model: string
  ModifyDate: string
  FNumber: number
  ISO: number
  ApertureValue: number
  ExposureCompensation: number
  MeteringMode: string
  Flash: string
  WhiteBalance: string
  ExifVersion: string
  XResolution: number
  YResolution: number
  ResolutionUnit: string
  DateTimeOriginal: Date
  ColorSpace: string
  ApplicationRecordVersion: number
  DateCreated: Date
  DateTimeCreated: Date
}

interface VersionInfo {
  id: string
  name: string
}
